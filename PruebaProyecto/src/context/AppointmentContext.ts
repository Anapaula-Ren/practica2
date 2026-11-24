// src/context/AppointmentContext.ts
import { createContext } from "react";
import type { AppointmentType } from "../types/AppointmentType";

type AppointmentContextValue = {
    citas: AppointmentType[];
    isLoading: boolean;
    error: string | null;
    addCita: (cita: Omit<AppointmentType, 'id_cita'>) => Promise<boolean>;
    deleteCita: (id: number) => Promise<boolean>;
}

export const AppointmentContext = createContext<AppointmentContextValue>({
    citas: [],
    isLoading: false,
    error: null,
    addCita: async () => false,
    deleteCita: async () => false
});