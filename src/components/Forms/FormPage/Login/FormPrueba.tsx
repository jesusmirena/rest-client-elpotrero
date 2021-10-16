import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import "./FormPrueba.css";
import useUser from "../../../../hooks/useUser";

export default function FormPrueba({ notify }: any) {
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<any> = ({ mail, password }) => {
    login({ mail, password }), reset();
  };

  return (
    <>
      {isLoginLoading && <Redirect to="/register"/>}
      {!isLoginLoading && (
        <div className="container-global">
          <div className="container" id="container">
            <div className="form-container sign-in-container">
              <form
                className="formNegro"
                action="#"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h1>Inicia sesión</h1>
                <input
                  className="inputLogIn"
                  type="email"
                  placeholder="Email"
                  {...register("mail", { required: true })}
                />
                <input
                  className="inputLogIn"
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", { required: true })}
                />
                <Link to="#">¿Olvidaste tu contraseña?</Link>

                <button className="btn" type="submit">
                  {isLogged && <Redirect to="/" />}
                  Ingresa
                </button>
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
      )}
      {hasLoginError && <h2>Credentials are invalid</h2>}
    </>
  );
}
