import React, { useState } from "react";
import todoStore from "../store/TodoStore";

const TodoInput = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      todoStore.addTodo(input);
      setInput("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default TodoInput;
