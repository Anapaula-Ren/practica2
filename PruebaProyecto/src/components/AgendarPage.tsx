import { useState } from 'react'
import Calendar from './Calendar'
import AppointmentForm from './AppointmentForm'

function AgendarPage() {
  // Elevamos el estado de la fecha y hora aquí para pasárselo al formulario
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')

  const handleDateSelect = (f: string, h: string) => {
    setFecha(f)
    setHora(h)
  }

  return (
    <div className="container">
      <Calendar onDateSelect={handleDateSelect} />
      <AppointmentForm fechaCita={fecha} horaCita={hora} />
    </div>
  )
}

export default AgendarPage