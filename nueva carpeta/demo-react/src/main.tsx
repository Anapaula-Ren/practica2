import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App} from './App.tsx'
//imprta el componente app
//regla: los compoenes deben empezar siempre ocn masyucula para ue react detecte que es un componente.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
