import type { TodoItem } from "./TodoItem";

export type todoAction =
| {type: "ADD"; item:TodoItem}
| {type:"STATUS";id:string}
| {type:"DELETE";id:string}