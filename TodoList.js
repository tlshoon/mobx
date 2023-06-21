import { observer } from "mobx-react-lite";
import React from "react";
import TodoStore from "../store/TodoStore";

const TodoList = observer(() => {
  return (
    <div>
      {TodoStore.todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => TodoStore.toggleCompleted(todo.id)}
          />
          <span>{todo.text}</span>
          <button onClick={() => TodoStore.removeTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
});

export default TodoList;
