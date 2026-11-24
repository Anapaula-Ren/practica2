import { useEffect, useState } from 'react'
import type { AppointmentType } from '../types/AppointmentType'

export const useAppointments = () => {
  const [citas, setCitas] = useState<AppointmentType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Recuerda cambiar esto por la URL real de tu API o la de tu compañero
  const API_URL = 'http://localhost:5126/api/gestion' 

  const fetchCitas = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error('Error al cargar citas')
      const data = await response.json()
      setCitas(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setIsLoading(false)
    }
  }

  const addCita = async (nuevaCita: Omit<AppointmentType, 'id_cita'>) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaCita)
      })
      if (response.ok) {
        await fetchCitas() 
        return true
      }
      return false
    } catch (error) {
      console.error(error)
      return false
    }
  }

  const deleteCita = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}?id=${id}`, { method: 'DELETE' })
      if (response.ok) {
        await fetchCitas()
        return true
      }
      return false
    } catch (error) {
      console.error(error)
      return false
    }
  }

  useEffect(() => {
    void fetchCitas()
  }, [])

  return { citas, isLoading, error, addCita, deleteCita }
}