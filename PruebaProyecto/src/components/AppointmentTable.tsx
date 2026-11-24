import { useState, useContext } from 'react'
import { AppointmentContext } from '../context/AppointmentContext'
import type { AppointmentType } from '../types/AppointmentType'

function AppointmentTable() {
  const { citas, isLoading, deleteCita } = useContext(AppointmentContext)
  const [selectedCita, setSelectedCita] = useState<AppointmentType | null>(null)

  const handleDelete = async () => {
    if (!selectedCita) return
    if (window.confirm('¿Estás seguro de que quieres eliminar esta cita?')) {
      const success = await deleteCita(selectedCita.id_cita)
      if (success) {
        alert('Cita eliminada')
        setSelectedCita(null) // Limpiar selección
      }
    }
  }

  if (isLoading) return <p>Cargando citas...</p>

  return (
    <div className="table-section">
      <h2>Citas Agendadas</h2>
      <div className="table-responsive">
        <table className="citas-table">
          <thead>
            <tr>
              <th>ID Cita</th>
              <th>Paciente</th>
              <th>Fecha</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            {citas.length === 0 ? (
              <tr><td colSpan={4}>No hay citas agendadas.</td></tr>
            ) : (
              citas.map(cita => (
                <tr 
                  key={cita.id_cita} 
                  onClick={() => setSelectedCita(cita)}
                  style={{ cursor: 'pointer', background: selectedCita?.id_cita === cita.id_cita ? '#e0f7fa' : 'transparent' }}
                >
                  <td>{cita.id_cita}</td>
                  <td>{cita.nombre_paciente}</td>
                  <td>{cita.fecha_cita}</td>
                  <td>{cita.hora_cita.substring(0, 5)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="details-section" style={{ marginTop: '20px' }}>
        <h2>Detalles de la Cita</h2>
        <p><strong>Nombre:</strong> {selectedCita?.nombre_paciente || '---'}</p>
        <p><strong>Edad/Categoría:</strong> {selectedCita ? `${selectedCita.edad} años - ${selectedCita.categoria}` : '---'}</p>
        <p><strong>Teléfono:</strong> {selectedCita?.numero_telefono || '---'}</p>
        
        <button 
          onClick={handleDelete} 
          disabled={!selectedCita} 
          className="btn-eliminar"
        >
          ELIMINAR CITA
        </button>
      </div>
    </div>
  )
}

export default AppointmentTable