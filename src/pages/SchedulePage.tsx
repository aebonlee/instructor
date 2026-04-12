import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { supabase, TABLES } from '../config/supabase'
import type { Schedule } from '../types/community'

type StatusFilter = 'upcoming' | 'ongoing' | 'completed' | 'cancelled'

export default function SchedulePage() {
  const { t, lang, localizedField } = useLanguage()
  const [schedules, setSchedules] = useState<Schedule[]>([])
  const [activeTab, setActiveTab] = useState<StatusFilter>('upcoming')
  const [loading, setLoading] = useState(true)

  useEffect(() => { loadSchedules() }, [activeTab])

  async function loadSchedules() {
    if (!supabase) { setLoading(false); return }
    setLoading(true)
    const { data } = await supabase
      .from(TABLES.SCHEDULES)
      .select('*')
      .eq('status', activeTab)
      .order('start_date', { ascending: activeTab === 'upcoming' || activeTab === 'ongoing' })
    setSchedules((data || []) as Schedule[])
    setLoading(false)
  }

  const tabs: StatusFilter[] = ['upcoming', 'ongoing', 'completed', 'cancelled']

  function formatMonth(dateStr: string) {
    const d = new Date(dateStr)
    return d.toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', { month: 'short' })
  }

  function formatDay(dateStr: string) {
    return new Date(dateStr).getDate()
  }

  function formatDateRange(s: Schedule) {
    const start = new Date(s.start_date).toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US')
    if (s.end_date && s.end_date !== s.start_date) {
      const end = new Date(s.end_date).toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US')
      return `${start} ~ ${end}`
    }
    return start
  }

  function formatTime(s: Schedule) {
    if (!s.start_time) return ''
    const start = s.start_time.slice(0, 5)
    const end = s.end_time ? s.end_time.slice(0, 5) : ''
    return end ? `${start} - ${end}` : start
  }

  return (
    <>
      <div className="schedule-hero">
        <div className="container">
          <h1>{t('schedule.title')}</h1>
          <p>{t('schedule.subtitle')}</p>
        </div>
      </div>
      <div className="container schedule-content">
        <div className="schedule-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`schedule-tab${activeTab === tab ? ' active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {t(`schedule.${tab}`)}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 60 }}>
            <div className="loading-spinner-small" style={{ margin: '0 auto' }} />
          </div>
        ) : schedules.length === 0 ? (
          <div className="schedule-empty">
            <i className="fa-regular fa-calendar" style={{ fontSize: 40, marginBottom: 16, display: 'block' }} />
            {t('schedule.noSchedule')}
          </div>
        ) : (
          <div className="schedule-list">
            {schedules.map(s => (
              <div key={s.id} className="schedule-card">
                <div className="schedule-date-box">
                  <div className="month">{formatMonth(s.start_date)}</div>
                  <div className="day">{formatDay(s.start_date)}</div>
                </div>
                <div className="schedule-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                    <h3>{localizedField(s, 'title')}</h3>
                    <span className={`schedule-status-badge ${s.status}`}>
                      {t(`schedule.${s.status}`)}
                    </span>
                  </div>
                  {(s.description || s.description_en) && (
                    <p>{localizedField(s, 'description')}</p>
                  )}
                  <div className="schedule-meta">
                    <span>
                      <i className="fa-regular fa-calendar" /> {formatDateRange(s)}
                    </span>
                    {formatTime(s) && (
                      <span>
                        <i className="fa-regular fa-clock" /> {formatTime(s)}
                      </span>
                    )}
                    {s.location && (
                      <span>
                        <i className="fa-solid fa-location-dot" /> {s.location}
                      </span>
                    )}
                    {s.max_seats && (
                      <span>
                        <i className="fa-solid fa-users" /> {t('schedule.seats')}: {s.max_seats}{t('schedule.people')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
