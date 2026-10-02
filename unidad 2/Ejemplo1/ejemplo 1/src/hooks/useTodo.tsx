import { useReducer } from 'react';
import { type TodoItem } from '../types/TodoItem';
import type { todoAction } from '../types/TodoAction';
 
function reducerTodo(state:TodoItem[], action:todoAction) {
    switch (action.type) {
        case 'ADD': {
            return [...state, action.item]
        }
        case 'STATUS': {
            return state.map(item => item.id === action.id ? { ...item, isComplete: !item.isComplete } : item)
           
        }
        case 'DELETE': {
            return state.filter((item) => item.id !== action.id)
        }
    default:
        return state;
    }
 
}
 
export const useTodo = () => {
    const [todos, dispatch] = useReducer(reducerTodo, [] as TodoItem[]);

    const addTodo = (title: string, description: string) => {
        dispatch({
            type: 'ADD',
            item: {id: crypto.randomUUID(), title, description, isComplete: false},
        });
    };

    const changeStatusTodo = (id: string) => () => {
        dispatch({type: 'STATUS', id});
    };

    const deleteTodo = (id: string) => () => {
        dispatch({type: 'DELETE', id});
    };

    return {todos, addTodo, changeStatusTodo, deleteTodo};
}