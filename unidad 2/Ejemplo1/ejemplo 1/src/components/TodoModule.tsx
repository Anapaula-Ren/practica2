import { TodoCard } from './TodoCard';
import { TodoForm } from './TodoForm';
import { useTodo} from '../hooks/useTodo';

export const TodoModule = () => {

  const { todos, addTodo, changeStatusTodo, deleteTodo} = useTodo();
  return (
    <main className="page">
      <div className="container stack">
        <header>
          <h1>Mis tareas</h1>
          <p className="text-muted">
            Organiza tus actividades pendientes.
          </p>
        </header>

        <TodoForm 
          handleAddTodo={addTodo}
        />

        <section className="stack" aria-labelledby="todo-list-title">
          <h2 id="todo-list-title">Lista de tareas</h2>

          <div className="grid">
            {
              todos.map((item)=>(
              <TodoCard 
              key={item.id}
              item={item}
              handleDelete={()=>deleteTodo(item.id)}
              handleStatus={()=>changeStatusTodo(item.id)}
              />
              ))
            }
          </div>
        </section>
      </div>
    </main>
  );
}
