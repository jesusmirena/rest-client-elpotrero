import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./RegisterForm.module.scss";
import { postUsername } from "../../../../redux/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

/* interface IFormInput {
  name: String;
  username: String;
  mail: String;
  password: String;
  birthday: String;
  dni: Number;
  cellphone: Number;
  image?: String;
  gender?: GenderEnum;
} */

export default function RegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = (data) => {
    postUsername(data), alert("Usuario Creado"), console.log(data), reset();
  };

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
            {...register("userName", { required: true })}
          />
          <label className={styles.formLabel}>Nombre de usuario</label>
          {errors.userName?.type === "required" && "userName is required"}
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
            placeholder="image"
            {...register("image", { required: true })}
          />
          <label className={styles.formLabel}>imagen</label>
          {errors.name?.type === "required" && "image is required"}
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
            type="text"
            {...register("birthday", { required: true })}
          />
          <label className={styles.formLabel}>Fecha de nacimiento</label>
          {errors.birthday?.type === "required" && "Birthday is required"}
        </div>
        <div className={styles.formDiv}>
          <input
            className={styles.formInput}
            type="number"
            placeholder="Ingresa tu documento de identificacion"
            {...register("dni", { valueAsNumber: true, required: true })}
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
          <label className={styles.formLabel}>Posicion</label>
          <select {...register("player.position")}>
            <option selected={true} disabled value="Default">
              Escoge una posicion
            </option>
            <option value="GOALKEEPER">GOALKEEPER</option>
            <option value="DEFENDER">DEFENDER</option>
            <option value="MIDFIELDER">MIDFIELDER</option>
            <option value="DEFENDER">DEFENDER</option>
            <option value="ATTACKER">ATTACKER</option>
          </select>
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>calificacion</label>
          <select
            {...register("player.qualification", { valueAsNumber: true })}
          >
            <option selected={true} disabled value="Default">
              Escoge una calificacion
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Genero</label>
          <select {...register("gender")}>
            <option selected={true} disabled value="Default">
              Escoge un genero
            </option>
            <option value="FEMALE">femenino</option>
            <option value="MALE">masculino</option>
            <option value="UNDEFINED">otro</option>
          </select>
        </div>
        <input className={styles.button} type="submit" />
      </form>
    </div>
  );
}
