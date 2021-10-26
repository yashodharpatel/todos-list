import React from "react";

export default function TodoItem(props) {
  const onDone = () => {
    const title = document.getElementById(props.todo.sno);
    title.classList.toggle("text-decoration-line-through");
    title.classList.toggle("opacity-50");
  };

  return (
    <div>
      <h4 id={props.todo.sno}>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <div className="mb-3 form-check">
        <label>
          <input
            type="checkbox"
            className="form-check-input"
            id="done"
            onChange={() => {
              onDone();
            }}
          />
          Done
        </label>
      </div>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          props.onDelete(props.todo);
        }}
      >
        Delete
      </button>
      <hr />
    </div>
  );
}