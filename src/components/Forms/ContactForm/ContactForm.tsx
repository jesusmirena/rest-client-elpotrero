import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  return (
    <div className={styles.containerGrid}>
      <div className={styles.titulo}>
        <h1 className={styles.titulo}>Contacto</h1>
        <h4>Email: elpotrero.info@gmail.com</h4>
      </div>
      <div className={styles.grid}>
        <h2>Nuestro Equipo</h2>
        <div className={styles.cardsGrid}>
          <div className={`${styles.cardItem} ${styles.CardItemUniqueEffect}`}>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/81334136?v=4"
                alt="Image not found"
              />
              <div className={styles.Content}>
                <h2 className={styles.Title}>Ariel Romero</h2>

                <a
                  href="https://www.linkedin.com/in/ariel-alejandro-romero-fullstack-developer/
                "
                >
                  <BsLinkedin /> Ver perfil de LinkedIn
                </a>
                <a
                  href="
                https://github.com/AlmafuerteAriel"
                >
                  <BsGithub /> Ver perfil de GitHub
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.cardItem} ${styles.CardItemUniqueEffect}`}>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/83507230?v=4"
                alt="Image not found"
              />
              <div className={styles.Content}>
                <h2 className={styles.Title}>Catalina Manzano</h2>

                <a href="https://www.linkedin.com/in/catalina-manzano-eiras-fullstackdev/">
                  <BsLinkedin /> Ver perfil de LinkedIn
                </a>

                <a href="https://github.com/cmanzano91">
                  {" "}
                  <BsGithub />
                  Ver perfil de GitHub
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.cardItem} ${styles.CardItemUniqueEffect}`}>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/80434023?v=4"
                alt="Image not found"
              />
              <div className={styles.Content}>
                <h2 className={styles.Title}>Federico Aguilera</h2>

                <a href="https://www.linkedin.com/in/federicoaguilera/">
                  <BsLinkedin /> Ver perfil de LinkedIn
                </a>

                <a href="https://github.com/Fedeaguilera94">
                  <BsGithub />
                  Ver perfil de GitHub
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.cardItem} ${styles.CardItemUniqueEffect}`}>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/85651192?v=4"
                alt="Image not found"
              />
              <div className={styles.Content}>
                <h2 className={styles.Title}>Jesus Mirena</h2>

                <a href="https://www.linkedin.com/in/jesus-alejandro-mirena-hidalgo/">
                  <BsLinkedin /> Ver perfil de LinkedIn
                </a>

                <a href="https://github.com/jesusmirena">
                  <BsGithub />
                  Ver perfil de GitHub
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.cardItem} ${styles.CardItemUniqueEffect}`}>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/73354578?v=4"
                alt="Image not found"
              />
              <div className={styles.Content}>
                <h2 className={styles.Title}>Rodrigo Batista</h2>

                <a href="https://www.linkedin.com/in/rodrigo-fullstack/">
                  <BsLinkedin /> Ver perfil de LinkedIn
                </a>

                <a href="https://github.com/Rodrii-github">
                  <BsGithub />
                  Ver perfil de GitHub
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.cardItem} ${styles.CardItemUniqueEffect}`}>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/83092940?v=4"
                alt="Image not found"
              />
              <div className={styles.Content}>
                <h2 className={styles.Title}>Santiago Gonzalez Lonzieme</h2>

                <a href="https://www.linkedin.com/in/santiago-gonzalez-lonzieme/">
                  <BsLinkedin /> Ver perfil de LinkedIn
                </a>

                <a href="https://github.com/sgonzalezlonzieme">
                  <BsGithub />
                  Ver perfil de GitHub
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.cardItem} ${styles.CardItemUniqueEffect}`}>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/32104719?v=4"
                alt="Image not found"
              />
              <div className={styles.Content}>
                <h2 className={styles.Title}>Jaime Linares</h2>

                <a href="https://www.linkedin.com/in/jaime-linares/">
                  <BsLinkedin /> Ver perfil de LinkedIn
                </a>

                <a href="https://github.com/parziva-1">
                  {" "}
                  <BsGithub />
                  Ver perfil de GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Gracias por visitar nuestra pagina</h2>
      </div>
    </div>
  );
}
