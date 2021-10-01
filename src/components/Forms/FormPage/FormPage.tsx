import React from "react";
import LoginForm from "./LoginForm";
import styles from "./FormPage.module.scss";

export default function FormPage() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
