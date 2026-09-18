import { StudentCard, type Student } from './StudentCard'
import { useState } from 'react'

export const StudentForm = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [correo, setCorreo] = useState('')
  const [matricula, setMatricula] = useState('')
  const [carrera, setCarrera] = useState('')
  const [semestre, setSemestre] = useState(0)
  const [edad, setEdad] = useState(0)
  const [students, setStudents] = useState<Student[]>([])
  
  const handleCreateStudent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newStudent: Student = {
      id: Date.now(),
      nombre,
      apellido,
      carrera,
      matricula,
      edad,
      semestre,
      correo
    }

    setStudents((current) => [...current, newStudent])
    setNombre('')
    setApellido('')
    setCarrera('')
    setMatricula('')
    setEdad(0)
    setSemestre(0)
    setCorreo('')
  }

  const handleDeleteStudent = (id: number) => {
    setStudents((current) => current.filter((student) => student.id !== id))
  }
    return (
    <main className="page">
      <div className="container">
        <section className="card" aria-labelledby="form-title">
          <header className="card__header stack stack--tight">
            <h1 id="form-title">Registrar estudiante</h1>
            <p className="text-muted">Completa la información para agregar un estudiante.</p>
          </header>

          <form className="stack" onSubmit={handleCreateStudent}>
            <div className="grid">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input 
                id="nombre" 
                type="text" 
                placeholder="Ej. Juanito" 
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                   />
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input
                    id="apellido"
                    type="text"
                    placeholder="Ej. Pérez"
                    required
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
                </div>
                <div className="form-group">
                <label htmlFor="correo">Correo</label>
                <input 
                id="correo" 
                type="email" 
                placeholder="ejemplo@correo.com" 
                required 
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
                <label htmlFor="title">Matricula</label>
 
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Ej. 23100169"
                  autoComplete="off"
                  required
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                />
              </div>
            <div className="form-group">
                <label htmlFor="category">Carrera</label>
 
                <select
                  id="category"
                  name="category"
                  required
                  value={carrera}
                  onChange={(e) => setCarrera(e.target.value)}
                >
                  <option value="" disabled>
                    Selecciona una categoría
                  </option>
 
                <option value="Sistemas">Sistemas</option>
                <option value="Industrial">Industrial</option>
                <option value="Civil">Civil</option>
                <option value="Mecatrónica">Mecatrónica</option>
                </select>
              </div>
            <div className="form-group1">
              <label htmlFor="semestre">Semestre</label>
 
              <input
                id="semestre"
                name="semestre"
                type="number"
                min="1"
                max="12"
                placeholder="Ej. 6"
                aria-describedby="semestre-help"
                required
                value={semestre}
                onChange={(e) => {
                  const value = e.target.value
                  const nextValue = value === '' ? 0 : Number.parseFloat(value)
                  setSemestre(nextValue)
                }}
              />
            <small id="semestre-help" className="form-help">
                Ingresalo bien.
              </small>
            </div>
 
            <div className="form-group">
              <label htmlFor="price">Edad</label>
 
              <input
                id="price"
                name="price"
                type="number"
                min="1"
                max="100"
                placeholder="Ej. 20"
                aria-describedby="edad-help"
                required
                value={edad}
                onChange={(e) => {
                  const value = e.target.value
                  const nextValue = value === '' ? 0 : Number.parseFloat(value)
                  setEdad(nextValue)
                }}
              />
 
              <small id="price-help" className="form-help">
                Ingresa la edad bien.
              </small>
            </div>
 
            <footer className="card__footer cluster cluster--spread">
              <button className="btn btn--secondary" type="reset">Limpiar</button>
              <button className="btn btn--primary" type="submit">Guardar estudiante</button>
            </footer>
          </form>
        </section>
         <section>
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={() => handleDeleteStudent(student.id)}
            />
          ))}
        </section>
      </div>
    </main>
  )
}