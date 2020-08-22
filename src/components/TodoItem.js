import React, { Component } from "react";
import {observer} from 'mobx-react';
import todoStore from "../stores/TodoStore";

@observer
class TodoItem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
    todoStore.counterRemainTodos();
  }
  removeTodo = () => {
    this.props.todo.delete();
    todoStore.counterRemainTodos();
  }
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : " "}>
        <div className="view">
          <input
            onChange={this.onToggle}
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
          />
          <label htmlFor="">{todo.title}</label>
          <button className="destroy" onClick={this.removeTodo}></button>
        </div>
      </li>
    );
  }
}
export default TodoItem;
