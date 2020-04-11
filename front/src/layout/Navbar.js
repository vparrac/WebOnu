import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div>
        <nav className="navbarHome">
          <a className="navbar-brand" href="#">
            <img
              src="logo.png"
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Logo Aplicación"
            ></img>
          </a>

          <div className="text-right">
            <Link className="btnLogin" to="/login">              
              Ingresa
            </Link>
            <Link className="btnRegister" to="/register">
              Registrate
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

// Navbar.propTypes = {

// };

export default Navbar;
