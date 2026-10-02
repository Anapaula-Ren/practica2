export interface Student {
  id: number
  nombre: string
  apellido: string
  carrera: string
  matricula: string
  edad: number
  semestre: number
  correo: string
}

export type NewStudent = Omit<Student, 'id'>