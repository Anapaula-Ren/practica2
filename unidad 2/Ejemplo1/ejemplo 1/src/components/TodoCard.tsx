
import { type TodoItem } from "../types/TodoItem";

interface TodoCardProps {
  item: TodoItem,
  handleStatus: ()=>void,
  handleDelete: ()=>void,
  handleEdit: ()=>void
}

export const TodoCard = ({item, handleStatus, handleDelete, handleEdit}:TodoCardProps) => {
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

                <div className="cluster">
                  <button type="button" className="btn--secondary btn--sm" onClick={handleEdit}>
                    Editar
                  </button>
                  <button type="button" className="btn--danger btn--sm" onClick={handleDelete}>
                    Eliminar
                  </button>
                </div>
              </div>
      </article>
    </div>
  );
};