import { type NewStudent, type Student } from '../types/StudentTypes'

export const createStudent = (student: NewStudent): Student => ({
  id: Date.now(),
  ...student,
})

export const deleteStudent = (students: Student[], id: number): Student[] =>
  students.filter((student) => student.id !== id)