import React from "react";
import NavBar from "../NavBar/NavBar";
import CardsGrid from "../CardsGrid/CardsGrid";
import styles from "../Home/Home.module.scss";

export default function Home() {
  return (
    <div>
      <NavBar />
      <CardsGrid />
    </div>
  );
}
