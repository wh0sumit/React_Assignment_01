import * as React from "react";
import { useContext } from "react";
import { Checkbox } from "../checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.scss";
import RemoveAudio from "../../assest/remove_sound.mp3";
import CompleteAudio from "../../assest/complete_sound.mp3";

export const TodoList = () => {
  const { todos, setTodos } = useContext(TodosContext);

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    const removeAudio = new Audio(RemoveAudio);
    removeAudio.play();
    setTodos(newTodos);
  };

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
    if (todos[id].checked) {
      todos[id].checked = false;
    } else {
      todos[id].checked = true;
    }
    const completeaudio = new Audio(CompleteAudio);
    completeaudio.play();
    setTodos([...todos]);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem, index) => (
            <Checkbox
              key={todoItem.id}
              onClick={() => toggleCheck(index)}
              checked={todoItem.checked}
              onDelete={() => handleDelete(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, index)}
              label={todoItem.label}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
