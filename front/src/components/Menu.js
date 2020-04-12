import React from "react";
import PropTypes from "prop-types";
import RegistrarFiebre from "./RegistrarFiebre";
import RegistrarFatiga from "./RegistrarFatiga";
import RegistrarTos from "./RegistrarTos";
import RegistrarDolor from "./RegistrarDolor";
import RegistrarCongestion from "./RegistrarCongestion";
import RegistrarDiarrea from "./RegistrarDiarrea";
import RegistrarDolorCabeza from "./RegistrarDolorCabeza";
import RegistrarDificultadRespirar from "./RegistrarDificultadRespirar";
import "../css/menu.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Menu = () => {
  return (
    <div>
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
          <Link to="/registrarcongestion">
            <img
              src="./congestion.svg"
              height="33"              
              width="40"
              className="ml-2 mr-4 d-inline-block"
            />
            Congestion
          </Link>
          <Link to="/registrardolor">
            <img
              src="./dolor.svg"
              height="33"
              width="40"
              className="ml-2 mr-4 d-inline-block"
            />
            Dolor
          </Link>

          <Link to="/registrarfatiga">
            <img
              src="./fatiga.svg"
              height="33"
              width="40"
              className="ml-2 mr-4 d-inline-block"
            />
            Fatiga
          </Link>
          <Link to="/registrardificultadrespirar">
            <img
              src="./respirar.svg"
              height="33"
              width="40"
              className="ml-2 mr-4 d-inline-block"
            />
            Ahogo
          </Link>

          <Link to="/registrarfiebre">
            <img
              src="./fever.png"
              height="33"
              width="35"
              className="ml-2 mr-4 d-inline-block"
            />
            Fiebre
          </Link>
          <Link to="/registrartos">
            <img
              src="./tos.svg"
              height="33"
              width="40"
              className="ml-2 mr-4 d-inline-block"
            />
            Tos
          </Link>

          <Link to="/registrardolorcabeza">
            <img
              src="./cabeza.svg"
              height="33"
              width="40"
              className="ml-2 mr-4 d-inline-block"
            />
            Dolor de cabeza
          </Link>
          

          <Link to="/registrardiarrea">
            <img
              src="./cabeza.svg"
              height="33"
              width="40"
              className="ml-2 mr-4 d-inline-block"
            />
            Diarrea
          </Link>
        </div>
      </div>
      
    </div>
  );
};
Menu.propTypes = {};
export default Menu;
