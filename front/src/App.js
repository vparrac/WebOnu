import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import BodyHome from './components/BodyHome';
import { Route, BrowserRouter, Switch, NavLink, Link } from 'react-router-dom';
import { RegistrarFiebre } from './components/RegistrarFiebre';
import { RegistrarFatiga } from './components/RegistrarFatiga';
import { RegistrarTos } from './components/RegistrarTos';
import { RegistrarDolor } from './components/RegistrarDolor';
import { RegistrarCongestion } from './components/RegistrarCongestion';
import { RegistrarDiarrea } from './components/RegistrarDiarrea';
import { RegistrarDolorCabeza } from './components/RegistrarDolorCabeza';
import { RegistrarDificultadRespirar } from './components/RegistrarDificultadRespirar';

function App() {
  return (
    <div>
      <div className="container-fluid">
        <Navbar></Navbar>
      </div>
      <BrowserRouter>
        <main>
          <Route path="/" exact component={BodyHome} />
          <Route path="/RegistrarFiebre" exact component={RegistrarFiebre} />
          <Route path="/RegistrarFatiga" exact component={RegistrarFatiga} />
          <Route path="/RegistrarTos" exact component={RegistrarTos} />
          <Route path="/RegistrarDolor" exact component={RegistrarDolor} />
          <Route
            path="/RegistrarCongestion"
            exact
            component={RegistrarCongestion}
          />
          <Route path="/RegistrarDiarrea" exact component={RegistrarDiarrea} />
          <Route
            path="/RegistrarDolorCabeza"
            exact
            component={RegistrarDolorCabeza}
          />
          <Route
            path="/RegistrarDificultadRespirar"
            exact
            component={RegistrarDificultadRespirar}
          />
        </main>
      </BrowserRouter>
      <div className="container">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
