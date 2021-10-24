import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
    <div className="container todos-list">
      <h3 className="text-decoration-underline my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        <h4>No Todos to Display</h4>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
}