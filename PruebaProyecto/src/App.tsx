import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import AppointmentProvider from './context/AppointmentProvider'
import AgendarPage from './components/AgendarPage'
import ConsultasPage from './components/ConsultasPage'
import './App.css'

function App() {
  return (
    <AppointmentProvider>
      <BrowserRouter>
        <header className="page-frame top-frame">
          <div className="color-band green-band"></div>
          <div className="color-band main-band">
            <h1 className="header-title">
              <span className="psi-symbol">&#936;</span> Consultorio Psicológico
            </h1>
            <nav>
              <NavLink
                to="/agendar"
                className={({ isActive }) => isActive ? 'activo' : ''}
              >
                Agendar
              </NavLink>
              <NavLink
                to="/consultas"
                className={({ isActive }) => isActive ? 'activo' : ''}
              >
                Revisión
              </NavLink>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Navigate to="/agendar" replace />} />
          <Route path="/agendar" element={<AgendarPage />} />
          <Route path="/consultas" element={<ConsultasPage />} />
        </Routes>

        <footer className="page-frame bottom-frame">
          <div className="color-band green-band"></div>
          <div className="color-band main-band footer-content">
            <p>
              <i className="phone-alt"></i> Teléfono: 55 1234 5678 |
              <i className="envelope"></i> Email: info@consultorio.com |
              <i className="facebook"></i> Facebook: @PsicologiaSalud
            </p>
          </div>
        </footer>
      </BrowserRouter>
    </AppointmentProvider>
  )
}

export default App
