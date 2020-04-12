import React from "react";
import PropTypes from "prop-types";
import RegistrarFiebre from './RegistrarFiebre';
import RegistrarFatiga from './RegistrarFatiga';
import RegistrarTos from './RegistrarTos';
import RegistrarDolor from './RegistrarDolor';
import RegistrarCongestion from './RegistrarCongestion';
import RegistrarDiarrea from './RegistrarDiarrea';
import RegistrarDolorCabeza from './RegistrarDolorCabeza';
import RegistrarDificultadRespirar from './RegistrarDificultadRespirar';
import "../css/menu.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="vertical-menu">
        <div className="active">
          <img
            src="https://res.cloudinary.com/dt9b7pad3/image/upload/v1495403294/Dashboard_kcz278.svg"
            height="32"
            width="40"
            className="ml-2 mr-4 d-inline-block"
          />
          Registra un sintoma
        </div>
        <hr></hr>
        <Link to="/menu/registrarcongestion">
          <img
            src="./congestion.svg"
            height="33"
            width="40"
            className="ml-2 mr-4 d-inline-block"
          />
          Congestion
        </Link>
        <Link to="/menu/registrardolor">
          <img
            src="./dolor.svg"
            height="33"
            width="40"
            className="ml-2 mr-4 d-inline-block"
          />
          Dolor
        </Link>

        <Link to="/menu/registrarfatiga">
          <img
            src="./fatiga.svg"
            height="33"
            width="40"
            className="ml-2 mr-4 d-inline-block"
          />
          Fatiga
        </Link>
        <Link to="/menu/registrardificultadrespirar">
          <img
            src="./respirar.svg"
            height="33"
            width="40"
            className="ml-2 mr-4 d-inline-block"
          />
          Ahogo
        </Link>

        <Link to="/menu/registrarfiebre">
          <img
            src="./fever.png"
            height="33"
            width="35"
            className="ml-2 mr-4 d-inline-block"
          />
          Fiebre
        </Link>
        <Link to="/menu/registrartos">
          <img
            src="./tos.svg"
            height="33"
            width="40"
            className="ml-2 mr-4 d-inline-block"
          />
          Tos
        </Link>
      </div>
       
          <Route path="/menu/registrarfiebre" exact component={RegistrarFiebre} />
          <Route path="/menu/registrarfatiga" exact component={RegistrarFatiga} />
          <Route path="/menu/registrartos" exact component={RegistrarTos} />
          <Route path="/menu/registrardolor" exact component={RegistrarDolor} />
          <Route
            path="/menu/registrarcongestion"
            exact
            component={RegistrarCongestion}
          />
          <Route path="/menu/registrardiarrea" exact component={RegistrarDiarrea} />
          <Route
            path="/menu/registrardolorcabeza"
            exact
            component={RegistrarDolorCabeza}
          />
          <Route
            path="/menu/registrardificultadrespirar"
            exact
            component={RegistrarDificultadRespirar}
          />
       
    </div>
  );
};
Menu.propTypes = {};
export default Menu;
