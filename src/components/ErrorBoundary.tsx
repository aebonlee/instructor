import { Component, type ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean; error: Error | null }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '60px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, marginBottom: 12 }}>문제가 발생했습니다</h2>
          <p style={{ color: '#6B7280', marginBottom: 20 }}>{this.state.error?.message}</p>
          <button
            onClick={() => { this.setState({ hasError: false, error: null }); window.location.href = '/' }}
            style={{ padding: '10px 24px', background: '#5B21B6', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}
          >
            홈으로 돌아가기
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
