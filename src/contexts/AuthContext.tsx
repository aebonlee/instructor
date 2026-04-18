import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { supabase, isSupabaseEnabled, TABLES } from '../config/supabase'
import { ADMIN_EMAILS } from '../config/admin'
import type { User, Session } from '@supabase/supabase-js'
import { useIdleTimeout } from '../hooks/useIdleTimeout';

interface AuthContextType {
  user: User | null
  session: Session | null
  isAuthenticated: boolean
  isAdmin: boolean
  loading: boolean
  signInWithEmail: (email: string, password: string) => Promise<{ error: any }>
  signUpWithEmail: (email: string, password: string, name: string) => Promise<{ error: any }>
  signInWithGoogle: () => Promise<void>
  signInWithKakao: () => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error: any }>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  const isAdmin = ADMIN_EMAILS.includes(user?.email || '')

  const upsertUser = useCallback(async (u: User) => {
    if (!isSupabaseEnabled() || !supabase) return
    try {
      await supabase.from(TABLES.USERS).upsert({
        id: u.id,
        email: u.email,
        name: u.user_metadata?.full_name || u.user_metadata?.name || u.email?.split('@')[0],
        avatar_url: u.user_metadata?.avatar_url || u.user_metadata?.picture,
        provider: u.app_metadata?.provider || 'email',
        domain: 'instructor',
        last_login: new Date().toISOString(),
      }, { onConflict: 'id' })
    } catch {}
  }, [])

  useEffect(() => {
    if (!isSupabaseEnabled() || !supabase) {
      setLoading(false)
      return
    }

    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s)
      setUser(s?.user ?? null)
      if (s?.user) upsertUser(s.user)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s)
      setUser(s?.user ?? null)
      if (s?.user) upsertUser(s.user)
    })

    return () => subscription.unsubscribe()
  }, [upsertUser])

  const signInWithEmail = async (email: string, password: string) => {
    if (!supabase) return { error: { message: 'Supabase not configured' } }
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error }
  }

  const signUpWithEmail = async (email: string, password: string, name: string) => {
    if (!supabase) return { error: { message: 'Supabase not configured' } }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    })
    return { error }
  }

  const signInWithGoogle = async () => {
    if (!supabase) return
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    })
  }

  const signInWithKakao = async () => {
    if (!supabase) return
    await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: { redirectTo: window.location.origin },
    })
  }

  const signOut = async () => {
    if (!supabase) return
    await supabase.auth.signOut()
    setUser(null)
    setSession(null)
  }

  const resetPassword = async (email: string) => {
    if (!supabase) return { error: { message: 'Supabase not configured' } }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`,
    })
    return { error }
  }


  // 10분 무동작 세션 타임아웃
  useIdleTimeout({
  enabled: !!user,
  onTimeout: () => {
  supabase.auth.signOut();
  },
  });

  return (
    <AuthContext.Provider value={{
      user, session, isAuthenticated: !!user, isAdmin, loading,
      signInWithEmail, signUpWithEmail, signInWithGoogle, signInWithKakao, signOut, resetPassword,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
