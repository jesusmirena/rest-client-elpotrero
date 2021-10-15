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
import CardsGrid from "./components/CardsGrid/CardsGrid";
import Success from "./components/Success/Success";
import Failed from "./components/Failed/Failed";
import Reserva from "./components/Reserva/Reserva";
import "./scss/App.scss";
import { UserContextProvider } from "./context/userContext";
import Profile from "./components/Profile/Profile";
import Players from "./components/Players/Players";
import DetalleJugador from "./components/DetalleJugador/DetalleJugador";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div>
          <Header />
          <NavBarMui />
          <Switch>
            <Route exact path="/" component={LandinPage} />
            <Route path="/home/:startDate" component={CardsGrid} />
            <Route path="/canchas" component={ReservarCancha} />
            <Route path="/equipo" component={CrearEquipo} />
            <Route path="/jugadores" component={Players} />
            <Route path="/jugador" component={DetalleJugador} />
            <Route path="/contacto" component={ContactForm} />
            <Route path="/login" component={FormPage} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/failed" component={Failed} />
            <Route path="/success" component={Success} />
            <Route path="/reserva" component={Reserva} />
            <Route path="/profile" component={Profile} />
            {/*           <Route path="/alquiler/:startDate" component={CardsGrid} />
             */}{" "}
          </Switch>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
