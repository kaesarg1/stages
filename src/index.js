

import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./components/landing.page";
import { AppLayout } from "./components/app.layout";
import { ProtectedRoute } from "./components/protected.route";
import Stage from './components/Stage';
import Stagiaire from './components/Stagiaire';
import Connexion from './components/Connexion';
import Apropos from './components/Apropos';
import Confidentialite from './components/Confidentialite';
import Contact from './components/Contact';
import Partenaires from './components/Partenaires';

import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  return (
    <HashRouter className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="/Stage" component={Stage} />
        <Route path="/Stagiaire" component={Stagiaire} />
        <Route path="/Connexion" component={Connexion} />
        <Route path="/Apropos" component={Apropos}/>
        <Route path="/Confidentialite" component={Confidentialite}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Partenaires" component={Partenaires}/>
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </HashRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);