import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <div>
      <h1>Registrate</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input
          placeholder="Escribe tu nombre"
          {...register("name", { required: true })}
        />
        {errors.name?.type === "required" && "name is required"}

        <label>Nombre de usuario</label>
        <input
          placeholder="Escribe tu nombre de usuario"
          {...register("username", { required: true })}
        />
        {errors.username?.type === "required" && "username is required"}

        <label>Correo electronico</label>
        <input
          placeholder="Ingresa tu correo electronico"
          type="email"
          {...register("mail", {
            required: true,
            pattern:
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          })}
        />
        {errors.mail?.type === "required" && "mail is required"}

        <label>Contraseña</label>
        <input
          placeholder="Ingresa una contraseña"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && "password is required"}

        <label>Fecha de nacimiento</label>
        <input
          type="date"
          {...register("password", { valueAsDate: true, required: true })}
        />
        {errors.birthday?.type === "required" && "Birthday is required"}

        <label>Documento de identificacion</label>
        <input
          placeholder="Ingresa tu documento de identificacion"
          {...register("dni", { required: true })}
        />
        {errors.dni?.type === "required" && "dni is required"}

        <label>Numero de telefono</label>
        <input
          placeholder="Ingresa tu numero telefonico"
          type="number"
          {...register("cellphone", { required: true, valueAsNumber: true })}
        />
        {errors.cellphone?.type === "required" && "Cellphone is required"}

        <label>Genero</label>
        <select {...register("gender")}>
          <option selected={true} disabled value="Default">
            Escoge un genero
          </option>
          <option value="femenino">femenino</option>
          <option value="masculino">masculino</option>
          <option value="otro">otro</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
}
