import React from "react";
import { Link } from "react-router-dom";
import "./FormPrueba.css";
export default function FormPrueba() {
  return (
    <div className="container-global">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Inicia sesión</h1>
            <input className="inputLogIn" type="email" placeholder="Email" />
            <input
              className="inputLogIn"
              type="password"
              placeholder="Contraseña"
            />
            <Link to="#">¿Olvidaste tu contraseña?</Link>
            <Link to="#">
              <button>Ingresa</button>
            </Link>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>¿Aún no tienes una cuenta?</h1>
              <p>¿Qué esperas para registrarte?</p>
              <Link to="/register">
                <button className="ghost" id="signIn">
                  Registrate
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
