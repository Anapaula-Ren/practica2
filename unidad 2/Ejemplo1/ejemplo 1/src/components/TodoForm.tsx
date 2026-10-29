
import {useEffect, useReducer} from "react";
import {type TodoItem} from "../types/TodoItem";

interface TodoFormState {
  title: string;
  description: string;
}

function eventInputReducer(prev: TodoFormState, next: Partial<TodoFormState>) {
  return {...prev,...next}
}

interface TodoFormProps {
  handleAddTodo: (
    title:string,
    description:string
  )=> void
  handleEditTodo: (
    id:string,
    title:string,
    description:string
  )=> void
  editingTodo: TodoItem | null
  handleCancelEdit: ()=> void
}

export const TodoForm = ({handleAddTodo, handleEditTodo, editingTodo, handleCancelEdit}: TodoFormProps) => {
  const [inputValue,dispatchInputValue] = useReducer(eventInputReducer, {
    title: editingTodo?.title ?? "",
    description: editingTodo?.description ?? ""
  })

  useEffect(() => {
    dispatchInputValue({
      title: editingTodo?.title ?? "",
      description: editingTodo?.description ?? ""
    });
  }, [editingTodo]);

  const saveTodo = () => {
    if (!inputValue.title.trim()) {
      return;
    }

    if (editingTodo) {
      handleEditTodo(editingTodo.id, inputValue.title, inputValue.description);
      handleCancelEdit();
    } else {
      handleAddTodo(inputValue.title, inputValue.description);
      dispatchInputValue({title: "", description: ""});
    }
  };

  return (
    <section className="card stack" aria-labelledby="todo-form-title">
      <div className="card__header">
        <h2 id="todo-form-title">{editingTodo ? "Editar tarea" : "Nueva tarea"}</h2>
      </div>

      <div className="form-group">
        <label htmlFor="todo-title">Título</label>
        <input
          id="todo-title"
          name="title"
          type="text"
          placeholder="Ej. Revisar documentación"
          value = {inputValue.title}
          onChange = {(e)=>dispatchInputValue({title:e.target.value})}
        />
      </div>

      <div className="form-group">
        <label htmlFor="todo-description">Descripción</label>
        <textarea
          id="todo-description"
          name="description"
          placeholder="Describe lo que necesitas hacer"
          value = {inputValue.description}
          onChange = {(e)=>dispatchInputValue({description:e.target.value})}
        />
      </div>

      <div className="cluster">
        <button type="button" onClick={saveTodo}>
          {editingTodo ? "Guardar cambios" : "Agregar tarea"}
        </button>
        {editingTodo && (
          <button type="button" className="btn--secondary" onClick={handleCancelEdit}>
            Cancelar
          </button>
        )}
      </div>
    </section>
  );
}
