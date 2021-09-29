import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/home">Home </Link>
        <Link to="/canchas">Canchas</Link>
        <Link to="/login">Login</Link>
      </nav>
      <select>
        <option value="A" disabled>
          Mi perfil
        </option>
        <option value="A" disabled>
          option
        </option>
        <option value="A" disabled>
          option2
        </option>
      </select>
    </div>
  );
};

export default NavBar;
