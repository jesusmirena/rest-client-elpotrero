import React, { useState } from "react";

export default function EditProfile() {
  const [user, setUser] = useState({
    name: "",
    userName: "",
    gender: "",
    birthday: "",
    cellphone: "",
    image: "",
    password: "",
    player: {
      position: "",
      qualification: "",
    },
  });

  return (
    <div>
      <form>
        <label>Usuario:</label>
        <input name="name" type="text" />
        <label>Imagen:</label>
        <input name="image" type="text" />
        <label>Celular:</label>
        <input name="cellphone" type="number" />
        <label>Posicion:</label>
        <input name="position" type="text" />
      </form>
    </div>
  );
}
