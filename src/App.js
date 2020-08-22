import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import todoStore from "./stores/TodoStore";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import Footer from './components/Footer';

@observer
class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry />
        <TodoItems />
        {todoStore.todos.length ? <Footer/> : ''} 
      </div>
    );
  }
}

export default App;
