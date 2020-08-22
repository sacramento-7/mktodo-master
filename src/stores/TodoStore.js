import {observable, action, computed} from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {
    @observable todos = []
    lastID = 0

    @observable remainTodos = 0;
    @observable status = 'all';

    @action
    addTodo(title){
        this.todos.push(new TodoModel(this, title, false, this.lastID ++))
    }

    @action
    counterRemainTodos() {
        this.remainTodos = 0;
        this.todos.map(todo => {
            if (!todo.completed) {
                this.remainTodos++;
            }
        });
    }

    @action
    filterTodo(filter) {
        this.status = filter;
    }

    @action
    clearCompleted() {
        this.todos.replace(this.todos.filter(todo=> todo.completed === false))
    }
    
}

const todoStore = new TodoStore()
export default todoStore
