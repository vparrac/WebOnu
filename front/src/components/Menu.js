import React from "react";
import PropTypes from "prop-types";
import "../css/menu.css";
const Menu = () => {
  return (
    <div>
      <div class="vertical-menu">
        <div class="active">
          <img
            src="https://res.cloudinary.com/dt9b7pad3/image/upload/v1495403294/Dashboard_kcz278.svg"
            height="32"
            width="40"
            class="ml-2 mr-4 d-inline-block"
          />
          Registra un sintoma
        </div>
        <hr></hr>
        <a href="#">
          <img
            src="./congestion.svg"
            height="33"
            width="40"
            class="ml-2 mr-4 d-inline-block"
          />
          Congestion
        </a>
        <a href="#">
          <img
            src="./dolor.svg"
            height="33"
            width="40"
            class="ml-2 mr-4 d-inline-block"
          />
          Dolor
        </a>
       
        <a href="#">
          <img
            src="./fatiga.svg"
            height="33"
            width="40"
            class="ml-2 mr-4 d-inline-block"
          />
          Fatiga
        </a>
        <a href="#">
          <img
            src="./respirar.svg"
            height="33"
            width="40"
            class="ml-2 mr-4 d-inline-block"
          />
          Ahogo
        </a>
      
        <a href="#">
          <img
            src="./fever.png"
            height="33"
            width="35"
            class="ml-2 mr-4 d-inline-block"
          />
          Fiebre
        </a>
        <a href="#">
          <img
            src="./tos.svg"
            height="33"
            width="40"
            class="ml-2 mr-4 d-inline-block"
          />
          Tos
        </a>
      </div>
      <div>
      
      </div>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
