import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-dark text-light py-3">
      <p className="text-center">
        Copyright &copy; &nbsp;
        <Link className="text-light text-decoration-none" to="/">
          todoslist.com
        </Link>
      </p>
    </div>
  );
}