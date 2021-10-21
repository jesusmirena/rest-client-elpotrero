import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";
import { searchByNameAvailable } from "../../redux/actions";

export default function SearchBarAvailable() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleChange(e: any) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(searchByNameAvailable(name));
    setName("");
  }
  return (
    <div>
      <form
        className={styles.searchContainer}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            value={name}
            onChange={(e) => handleChange(e)}
            placeholder="Buscar...."
          />
          <button className={styles.searchButton} value="buscar" type="submit">
            <FaSearch size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
