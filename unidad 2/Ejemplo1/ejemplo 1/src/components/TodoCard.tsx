
import { type TodoItem } from "../types/TodoItem";

interface TodoCardProps {
  item: TodoItem,
  handleStatus: ()=>void,
  handleDelete: ()=>void
}

export const TodoCard = ({item, handleStatus, handleDelete}:TodoCardProps) => {
  return (
    <div className="grid">
      <article className="card">
        <div className="stack">
          <h3>{item.title}</h3>
          <p className="text-muted">
            {item.description}
          </p>
        </div>

        <div className="card__footer cluster cluster--spread">
          <label className="cluster">
            <input type="checkbox" checked={item.isComplete} onChange={handleStatus}/>
            <span>{item.isComplete?'Completado':'Pendiente'}</span>
          </label>

          <button type="button" className="btn--danger btn--sm" onClick={handleDelete}>
            Eliminar
          </button>
        </div>
      </article>

      {/* Diseño: tarea completada */}
      <article className="card">
        <div className="stack">
          <h3>Preparar presentación</h3>
          <p className="text-muted">
            Organizar las diapositivas para la reunión.
          </p>
        </div>

        <div className="card__footer cluster cluster--spread">
          <label className="cluster">
            <input type="checkbox" defaultChecked />
            <span>Completada</span>
          </label>

          <button type="button" className="btn--danger btn--sm">
            Eliminar
          </button>
        </div>
      </article>
    </div>
  );
};