
import {useReducer} from "react";

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
}

export const TodoForm = ({handleAddTodo}: TodoFormProps) => {
  const [inputValue,dispatchInputValue] = useReducer(eventInputReducer, {title: "", description: ""})
  return (
    <section className="card stack" aria-labelledby="todo-form-title">
      <div className="card__header">
        <h2 id="todo-form-title">Nueva tarea</h2>
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

      <button type="button" onClick={() => handleAddTodo(inputValue.title, inputValue.description)}>
        Agregar tarea
      </button>
    </section>
  );
}
