// src/context/AppointmentProvider.tsx
import { type ReactNode } from 'react'
import { useAppointments } from '../hooks/useAppointments'
import { AppointmentContext } from './AppointmentContext'

type Props = { children: ReactNode }

const AppointmentProvider = ({ children }: Props) => {
    const { citas, isLoading, error, addCita, deleteCita } = useAppointments()

    return (
        <AppointmentContext.Provider value={{ citas, isLoading, error, addCita, deleteCita }}>
            {children}
        </AppointmentContext.Provider>
    )
}

export default AppointmentProvider