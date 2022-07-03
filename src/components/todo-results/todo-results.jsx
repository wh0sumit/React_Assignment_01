import * as React from "react";
import { useContext } from "react";
import { TodosContext } from "../../todo-context";
import "./todo-results.scss";

export const TodoResults = () => {
  const { todos } = useContext(TodosContext);
  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    const checked = todos.filter((todo) => todo.checked);
    return checked.length;
  };

  return (
    <div className="todo-results">
      Done:
      {""}
      {calculateChecked()}
    </div>
  );
};
