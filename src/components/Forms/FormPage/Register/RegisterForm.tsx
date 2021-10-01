import React from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./RegisterForm.module.scss";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  name: String;
  username: String;
  mail: String;
  password: String;
  birthday: String;
  dni: Number;
  cellphone: Number;
  image?: String;
  gender?: GenderEnum;
}

export default function RegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div className={styles.formBgImg}>
      <h2>Registrate</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formDiv}>
          <input
            className={styles.formInput}
            placeholder="Escribe tu nombre"
            {...register("name", { required: true })}
          />
          <label className={styles.formLabel}>Nombre</label>
          {errors.name?.type === "required" && "name is required"}
        </div>
        <div className={styles.formDiv}>
          <input
            className={styles.formInput}
            placeholder="Escribe tu nombre de usuario"
            {...register("username", { required: true })}
          />
          <label className={styles.formLabel}>Nombre de usuario</label>
          {errors.username?.type === "required" && "username is required"}
        </div>
        <div className={styles.formDiv}>
          <input
            className={styles.formInput}
            placeholder="Ingresa tu correo electronico"
            type="email"
            {...register("mail", {
              required: true,
              pattern:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            })}
          />
          <label className={styles.formLabel}>Correo electronico</label>
          {errors.mail?.type === "required" && "mail is required"}
        </div>
        <div className={styles.formDiv}>
          <input
            className={styles.formInput}
            type="password"
            placeholder="Ingresa una contraseña"
            {...register("password", { required: true })}
          />
          <label className={styles.formLabel}>Contraseña</label>
          {errors.password?.type === "required" && "password is required"}
        </div>
        <div className={styles.formDiv}>
          <input
            className={styles.formInput}
            type="date"
            {...register("birthday", { valueAsDate: true, required: true })}
          />
          <label className={styles.formLabel}>Fecha de nacimiento</label>
          {errors.birthday?.type === "required" && "Birthday is required"}
        </div>
        <div className={styles.formDiv}>
          <input
            className={styles.formInput}
            placeholder="Ingresa tu documento de identificacion"
            {...register("dni", { required: true })}
          />
          <label className={styles.formLabel}>
            Documento de identificacion
          </label>
          {errors.dni?.type === "required" && "dni is required"}
        </div>
        <div className={styles.formDiv}>
          <input
            className={styles.formInput}
            placeholder="Ingresa tu numero telefonico"
            type="tel"
            {...register("cellphone", { required: true, valueAsNumber: true })}
          />
          <label className={styles.formLabel}>Numero de telefono</label>
          {errors.cellphone?.type === "required" && "Cellphone is required"}
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Genero</label>
          <select {...register("gender")}>
            <option selected={true} disabled value="Default">
              Escoge un genero
            </option>
            <option value="femenino">femenino</option>
            <option value="masculino">masculino</option>
            <option value="otro">otro</option>
          </select>
        </div>
        <input className={styles.button} type="submit" />
      </form>
    </div>
  );
}
