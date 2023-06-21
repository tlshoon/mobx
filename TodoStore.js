import { makeAutoObservable } from "mobx";

class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }

  todos = [];

  addTodo(todo) {
    this.todos.push({
      id: Date.now(),
      text: todo,
      completed: false,
    });
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleCompleted(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

const todoStore = new TodoStore();
export default todoStore;
