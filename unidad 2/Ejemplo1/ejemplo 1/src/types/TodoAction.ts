import type { TodoItem } from "./TodoItem";

export type todoAction =
| {type: "ADD"; item:TodoItem}
| {type:"STATUS";id:string}
| {type:"DELETE";id:string}
| {type:"EDIT";id:string;title:string;description:string}