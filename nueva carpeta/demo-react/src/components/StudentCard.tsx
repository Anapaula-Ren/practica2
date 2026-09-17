import { Avatar } from './Avatar'
import { Card } from './Card'

export const StudentCard = () => {
  return (
    <Card
      header={
        <div className="cluster">
          <Avatar firstName="Ana" lastName="Garcia" />
          <div className="stack stack--tight grow">
            <div className="cluster cluster--spread">
              <h4>Ana Garcia</h4>
              <span className="badge badge--success">Activo</span>
            </div>
            <p className="text-muted">Ingenieria en Sistemas</p>
          </div>
        </div>
      }
      footer={
        <div className="cluster">
          <button className="btn btn--sm" type="button">
            Ver perfil
          </button>
          <button className="btn btn--secondary btn--sm" type="button">
            Editar
          </button>
        </div>
      }
    >
      <dl className="meta-list">
        <div className="meta-list__row">
          <dt className="meta-list__label">Matricula</dt>
          <dd className="meta-list__value">2024-00123</dd>
        </div>
        <div className="meta-list__row">
          <dt className="meta-list__label">Edad</dt>
          <dd className="meta-list__value">21 anos</dd>
        </div>
        <div className="meta-list__row">
          <dt className="meta-list__label">Semestre</dt>
          <dd className="meta-list__value">6</dd>
        </div>
        <div className="meta-list__row">
          <dt className="meta-list__label">Correo</dt>
          <dd className="meta-list__value">ana.garcia@tec.mx</dd>
        </div>
      </dl>
    </Card>
  )
}