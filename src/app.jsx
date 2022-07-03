import * as React from "react";
import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";
import { TodoResults } from "./components/todo-results";
import TodoContextProvider from "./todo-context";
import "./index.scss";

export const App = () => (
  <div className="root">
    <TodoContextProvider>
      <TodoList />
      <TodoResults />
      <TodoForm />
    </TodoContextProvider>
  </div>
);
