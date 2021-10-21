import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import "./FormPrueba.css";
import useUser from "../../../../hooks/useUser";
// import { postLoginGoogle } from "../../../../redux/actions";
import { FcGoogle } from "react-icons/fc";

export default function FormPrueba({ notify }: any) {
  const { login, isLogged } = useUser();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<any> = ({ mail, password }) => {
    login({ mail, password })
    reset();
  };
  
  function googleLogin() {
    const googleLoginURL = "http://localhost:3001/auth/google";
    const newWindow = window.location.replace(googleLoginURL);
    console.log(newWindow)
  }
  return (
    <>
      {/* {!isLoginLoading && ( */}
      <div className="container-global">
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <div className="formNegro">
              <button className="boton-google" onClick={googleLogin}>
                Inicia con Google{" "}
                <FcGoogle className="icono-google" size={20} />
              </button>
              <form
                className="formNegroContainer"
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
                  {isLogged ? <Redirect to="/home" /> : <Redirect to="/" />}
                  Ingresa
                </button>
              </form>
            </div>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1 className="titulo-derecha">¿Aún no tienes una cuenta?</h1>
                <p className="parrafo-derecha">
                  ¿Qué esperas para registrarte?
                </p>
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
    </>
  );
}
