import * as React from "react";
import { useContext, useState } from "react";
import { TodosContext } from "../../todo-context";
import "./todo-form.scss";

export const TodoForm = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    // Fin an ability to add new task
    if (task !== "") {
      const newTodo = {
        id: todos.length,
        label: task,
        checked: false,
      };
      setTodos([...todos, newTodo]);
      setTask("");
    } else {
      alert("Please enter a task");
    }
  };
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };
  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
