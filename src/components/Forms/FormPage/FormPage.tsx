import React from "react";
import styles from "./FormPage.module.scss";
import FormPrueba from "./Login/FormPrueba";

export default function FormPage() {
  return (
    <div className={styles.formBgImg}>
      <FormPrueba />
    </div>
  );
}
