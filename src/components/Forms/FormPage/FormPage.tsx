import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function FormPage() {
  return (
    <div>
      <h1>Tu cuenta</h1>
      <div>
        <p>Inicia sesion</p>
        <LoginForm />
      </div>
      <div>
        <p>Registrate</p>
        <div>
          <h2>
            <strong>No tienes una cuenta?</strong>
          </h2>
          <p>Qué esperas para registrarte?</p>
        </div>
        <button>
          <Link to="/register">Registrate</Link>
        </button>
      </div>
    </div>
  );
}
