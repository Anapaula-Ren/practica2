import { useState } from 'react'
import { createStudent, deleteStudent } from '../services/StudentService'
import { type NewStudent, type Student } from '../types/StudentTypes'

export const useStudents = () => {
	const [students, setStudents] = useState<Student[]>([])

	const addStudent = (student: NewStudent) => {
		setStudents((current) => [...current, createStudent(student)])
	}

	const removeStudent = (id: number) => {
		setStudents((current) => deleteStudent(current, id))
	}

	return {
		students,
		addStudent,
		removeStudent,
	}
}
