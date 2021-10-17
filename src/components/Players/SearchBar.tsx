import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";
import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleChange(e: any) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(searchByName(name));
    setName("");
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => handleChange(e)}
            placeholder="Search..."
          />
          <input value="buscar" type="submit" />
        </div>
      </form>
    </div>
  );
}
