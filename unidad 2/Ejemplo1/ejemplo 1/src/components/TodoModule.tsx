import { TodoCard } from './TodoCard';
import { TodoForm } from './TodoForm';
import { useTodo} from '../hooks/useTodo';
import { useState } from 'react';
import { type TodoItem } from '../types/TodoItem';

export const TodoModule = () => {

  const { todos, addTodo, changeStatusTodo, deleteTodo, editTodo} = useTodo();
  const [editingTodo, setEditingTodo] = useState<TodoItem | null>(null);

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
          handleEditTodo={editTodo}
          editingTodo={editingTodo}
          handleCancelEdit={() => setEditingTodo(null)}
        />

        <section className="stack" aria-labelledby="todo-list-title">
          <h2 id="todo-list-title">Lista de tareas</h2>

          <div className="grid">
            {
              todos.map((item)=>(
              <TodoCard 
              key={item.id}
              item={item}
              handleDelete={() => {
                deleteTodo(item.id);
                if (editingTodo?.id === item.id) {
                  setEditingTodo(null);
                }
              }}
              handleStatus={() => changeStatusTodo(item.id)}
              handleEdit={() => setEditingTodo(item)}
              />
              ))
            }
          </div>
        </section>
      </div>
    </main>
  );
}
