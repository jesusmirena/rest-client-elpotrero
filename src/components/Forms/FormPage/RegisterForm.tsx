import React from "react";
import ReactDOM from "react-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import PasoAPaso from "./PasoAPaso";

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
        <PasoAPaso />
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            label="Nombre"
            variant="standard"
            placeholder="Nombre"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && "name is required"}
          <TextField
            label="Nombre de usuario"
            variant="standard"
            placeholder="Nombre de usuario"
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && "username is required"}

          <TextField
            label="Correo electronico"
            variant="standard"
            placeholder="correo electronico"
            type="email"
            {...register("mail", {
              required: true,
              pattern:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            })}
          />
          {errors.mail?.type === "required" && "mail is required"}

          <TextField
            label="Contraseña"
            variant="standard"
            type="password"
            placeholder="Ingresa una contraseña"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && "password is required"}
          <label>Fecha de nacimiento</label>
          <TextField
            variant="standard"
            type="date"
            {...register("birthday", { valueAsDate: true, required: true })}
          />
          {errors.birthday?.type === "required" && "Birthday is required"}

          <TextField
            label="Documento de identificacion"
            variant="standard"
            placeholder="documento de identificacion"
            {...register("dni", { required: true })}
          />
          {errors.dni?.type === "required" && "dni is required"}

          <TextField
            label="Numero de telefono"
            variant="standard"
            placeholder="numero telefonico"
            type="tel"
            {...register("cellphone", { required: true, valueAsNumber: true })}
          />
          {errors.cellphone?.type === "required" && "Cellphone is required"}
          <Box sx={{ maxWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Genero</InputLabel>
              <Select
                {...register("gender")}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="gender"
              >
                <MenuItem value="femenino">femenino</MenuItem>
                <MenuItem value="masculino">masculino</MenuItem>
                <MenuItem value="otro">otro</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <input type="submit" />
        </Grid>
      </form>
    </div>
  );
}
