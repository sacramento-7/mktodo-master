import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoStore from "../stores/TodoStore";
import {observer} from "mobx-react";

@observer
class TodoItems extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {
            todoStore.todos.map(todo=>{
              if(todoStore.status==='active'){
                return (!todo.completed ? <TodoItem todo={todo}/> : '')
              }else if(todoStore.status==='completed'){
                return (todo.completed ? <TodoItem todo={todo}/> : '')
              }else {
                return <TodoItem todo={todo}/>
              }
            })
          }
        </ul>
      </section>
    );
  }
}
export default TodoItems;
