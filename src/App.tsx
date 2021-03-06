import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReservarCancha from "./components/Canchas/ReservarCancha";
import CrearEquipo from "./components/Equipos/CrearEquipo";
import ContactForm from "./components/Forms/ContactForm/ContactForm";
import FormPage from "./components/Forms/FormPage/FormPage";
import RegisterForm from "./components/Forms/FormPage/Register/RegisterForm";
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
import Teams from "./components/Teams/Teams";
import TeamsId from "./components/Teams/TeamsId";
import HomeDos from "./components/HomeDos/HomeDos";
import Players from "./components/Players/Players";
import DetalleJugador from "./components/DetalleJugador/DetalleJugador";
import LoginGoogleForm from "./components/Forms/FormPage/LoginGoogle/LoginGoogleForm";
import Notificaciones from "./components/Notificaciones/Notificaciones";
import CartItem from "./components/CarritodeJugadores/Item/CartItem";
import PlayersAvailable from "./components/Players/PlayersAvailable";
import CartDisponible from "./components/CarritodeJugadores/Item/CartDisponible";
import AllTeams from "./components/Teams/AllTeams";
import MisReservas from "./components/Reserva/MisReservas";
import EditTeam from "./components/Teams/EditTeam";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserContextProvider>
          <Header />
          <NavBarMui />

          <Switch>
            <Route exact path="/" component={LandinPage} />
            <Route exact path="/home" component={HomeDos} />
            <Route path="/home/:startDate" component={CardsGrid} />
            <Route path="/canchas" component={ReservarCancha} />
            <Route path="/equipo" component={CrearEquipo} />
            <Route path="/jugadores" component={Players} />
            <Route path="/jugador/:id" component={DetalleJugador} />
            <Route path="/contacto" component={ContactForm} />
            <Route path="/login" component={FormPage} />
            <Route path="/googleForm" component={LoginGoogleForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/failed" component={Failed} />
            <Route path="/success" component={Success} />
            <Route path="/reserva" component={Reserva} />
            <Route path="/profile" component={Profile} />
            <Route path="/teams" component={Teams} />
            <Route path="/teamsId" component={TeamsId} />
            <Route path="/crearequipo" component={CrearEquipo} />
            <Route path="/carrito" component={CartItem} />
            <Route path="/carritoAvailable" component={CartDisponible} />
            <Route path="/disponibles" component={PlayersAvailable} />
            <Route path="/notificaciones" component={Notificaciones} />
            <Route path="/allteams" component={AllTeams} />
            <Route path="/misreservas" component={MisReservas} />
            <Route path="/teamedit" component={EditTeam} />
          </Switch>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
