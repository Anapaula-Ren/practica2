import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fullcalendar/core/main.css'
import '@fullcalendar/common/main.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/