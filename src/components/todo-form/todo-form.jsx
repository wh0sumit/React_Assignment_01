import * as React from "react";
import { useContext, useState } from "react";
import { TodosContext } from "../../todo-context";
import "./todo-form.scss";

export const TodoForm = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.length > 0) {
      if (todos.length > 0) {
        // find the largest id in the todos array and add 1 to it
        const largestId = Math.max(...todos.map((todo) => todo.id));
        // add the new task to the todos array
        setTodos([
          ...todos,
          {
            id: largestId + 1,
            label: task,
            checked: false,
          },
        ]);
        setTask("");
      } else {
        // if their will be no todos, set the id to 0
        setTodos([
          {
            id: 0,
            label: task,
            checked: false,
          },
        ]);
        setTask("");
      }
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
