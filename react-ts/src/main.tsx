import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CounterContextProvider from './contexts/Counter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>

  </StrictMode>,
)
