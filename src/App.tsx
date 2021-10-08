import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReservarCancha from "./components/Canchas/ReservarCancha";
import CrearEquipo from "./components/Equipos/CrearEquipo";
import ContactForm from "./components/Forms/ContactForm/ContactForm";
import FormPage from "./components/Forms/FormPage/FormPage";
import RegisterForm from "./components/Forms/FormPage/Register/RegisterForm";
import Home from "./components/Home/Home";
import NavBarMui from "./components/NavBar/NavBarMUI";
import LandinPage from "./components/LandingPage/LandingPage";
import Header from "./components/Header/Header";

import "./scss/App.scss";
import CardsGrid from "./components/CardsGrid/CardsGrid";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <NavBarMui />
        <Switch>
          <Route exact path="/" component={LandinPage} />
          <Route path="/home" component={Home} />
          <Route path="/canchas" component={ReservarCancha} />
          <Route path="/equipo" component={CrearEquipo} />
          <Route path="/contacto" component={ContactForm} />
          <Route path="/login" component={FormPage} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/alquiler" component={CardsGrid} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
