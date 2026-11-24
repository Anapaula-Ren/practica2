import { useState, useContext } from 'react'
import { AppointmentContext } from '../context/AppointmentContext'

type Props = {
  fechaCita: string;
  horaCita: string;
}

function AppointmentForm({ fechaCita, horaCita }: Props) {
  const { addCita } = useContext(AppointmentContext)
  
  // Estado local para los campos del formulario
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    numeroTelefono: '',
    edad: '',
    categoria: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!fechaCita || !horaCita) {
      alert("Por favor, selecciona una fecha y hora en el calendario primero.");
      return;
    }

    const nuevaCita = {
      nombre_paciente: formData.nombreCompleto,
      numero_telefono: formData.numeroTelefono,
      edad: Number(formData.edad),
      categoria: formData.categoria,
      fecha_cita: fechaCita,
      hora_cita: horaCita
    }

    const success = await addCita(nuevaCita)
    if (success) {
      alert('¡Cita agendada con éxito!')
      setFormData({ nombreCompleto: '', numeroTelefono: '', edad: '', categoria: '' }) // Limpiar
    } else {
      alert('Error al agendar la cita.')
    }
  }

  return (
    <div className="form-section">
      <h2>Agenda tu cita</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre Completo</label>
          <input type="text" name="nombreCompleto" value={formData.nombreCompleto} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Número de teléfono</label>
          <input type="tel" name="numeroTelefono" value={formData.numeroTelefono} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Edad</label>
          <input type="number" name="edad" min="0" value={formData.edad} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Categoría</label>
          <select name="categoria" value={formData.categoria} onChange={handleChange} required>
            <option value="">Selecciona</option>
            <option value="Niño">Niño</option>
            <option value="Adolescente">Adolescente</option>
            <option value="Adulto">Adulto</option>
          </select>
        </div>
        
        {/* Mostramos la fecha y hora seleccionada visualmente */}
        <div className="form-group">
          <label>Fecha Seleccionada</label>
          <input type="text" value={fechaCita || 'Selecciona en el calendario'} readOnly />
        </div>
        <div className="form-group">
          <label>Hora Seleccionada</label>
          <input type="text" value={horaCita || 'Selecciona en el calendario'} readOnly />
        </div>

        <button type="submit" className="btn-agendar">Agendar</button>
      </form>
    </div>
  )
}

export default AppointmentForm