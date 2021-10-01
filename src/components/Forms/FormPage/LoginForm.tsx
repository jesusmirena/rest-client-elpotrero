import Button from "@material-ui/core/Button";
import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./LoginForm.module.scss";

interface IFormInput {
  name: String;
  username: String;
  mail: String;
  password: String;
}

export default function RegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div>
      <div className={styles.box}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span className={styles.textCenter}>Iniciar sesion</span>
          <div className={styles.inputContainer}>
            <label></label>
            <input
            placeholder="Usuario..."
              {...register("username", { required: true })}
            />
            {errors.username?.type === "required" && "username is required"}
          </div>
          <div className={styles.inputContainer}>
            <label></label>
            <input
            placeholder="Contraseña..."
              {...register("password", { required: true })}
              type="password"
            />
            {errors.password?.type === "required" && "password is required"}
          </div>
        </form>
        <Button variant="contained">Iniciar sesion</Button>
      </div>
    </div>
  );
}
