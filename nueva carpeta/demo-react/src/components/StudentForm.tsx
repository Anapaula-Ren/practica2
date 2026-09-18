import { StudentCard } from './StudentCard'

export const StudentForm = () => {
  return (
    <main className="page">
      <div className="container">
        <section className="card" aria-labelledby="form-title">
          <header className="card__header stack stack--tight">
            <h1 id="form-title">Registrar estudiante</h1>
            <p className="text-muted">Completa la información para agregar un estudiante.</p>
          </header>

          <form className="stack">
            <div className="grid">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" type="text" placeholder="Ej. Juanito" required />
              </div>
              <div className="form-group">
                <label htmlFor="correo">Correo</label>
                <input id="correo" type="email" placeholder="ejemplo@correo.com" required />
              </div>
            </div>
            {/* ...resto de inputs (matricula, carrera, semestre, edad)... */}
            <footer className="card__footer cluster cluster--spread">
              <button className="btn btn--secondary" type="reset">Limpiar</button>
              <button className="btn btn--primary" type="submit">Guardar estudiante</button>
            </footer>
          </form>
        </section>
      </div>
    </main>
  )
}