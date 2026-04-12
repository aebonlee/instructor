import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Register all topic content
import './data/content-ai-basics'
import './data/content-ai-advanced'
import './data/content-planning-marketing'
import './data/content-instructor-training'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
