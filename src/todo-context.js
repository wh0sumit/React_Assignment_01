import React, { createContext, useState } from "react";

export const TodosContext = createContext();

export default function TodoContextProvider({ children }) {
  const todosTemplate = [
    {
      id: 0,
      label: "Fix an ability to display all tasks",
      checked: false,
    },
    {
      id: 1,
      label: "Fix a layout, checkboxes should be listed in a column",
      checked: false,
    },
    {
      id: 2,
      label: "Fix an ability to add a new task",
      checked: false,
    },
    {
      id: 3,
      label: "Fix an ability to toggle a task",
      checked: false,
    },
    {
      id: 4,
      label: "Fix an ability to delete a task",
      checked: false,
    },
    {
      id: 5,
      label: "Fix an ability to count completed tasks",
      checked: false,
    },
  ];
  const [todos, setTodos] = useState(todosTemplate);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
