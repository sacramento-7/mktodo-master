import React, { Component } from "react";
import { observe, observer } from "mobx-react";
import todoStore from "../stores/TodoStore";

@observer
class Footer extends Component {
  render() {
    return (
      <div className={"footer"}>
        <span className="todo-count">{todoStore.remainTodos+`${todoStore.remainTodos >1 ? ' items left': ' item left'}`}</span>
        <ul className="filters">
          <li>
            <a href="#" className={todoStore.status==='all'? 'selected': ''} onClick={() => todoStore.filterTodo("all")}>
              All
            </a>
          </li>
          <li>
            <a href="#" className={todoStore.status==='active'? 'selected': ''} onClick={() => todoStore.filterTodo("active")}>
              Active
            </a>
          </li>
          <li>
            <a href="#" className={todoStore.status==='completed'? 'selected': ''} onClick={() => todoStore.filterTodo("completed")}>
              Completed
            </a>
          </li>
        </ul>
        <span
          className="clear-completed"
          onClick={() => todoStore.clearCompleted()}
        >
          Clear completed
        </span>
      </div>
    );
  }
}
export default Footer;
