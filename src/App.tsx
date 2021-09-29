import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import "./scss/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={NavBar} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
