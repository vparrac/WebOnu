import React from "react";
// import PropTypes from 'prop-types';

const Navbar = () => {
  return (
    <div>
      <nav className="navbarHome white">
        <a className="navbar-brand" href="#">
          <img
            src="logo.png"
            width="70"
            height="70"
            class="d-inline-block align-top"
            alt="Logo Aplicación"
          ></img>
        
        </a>

        
        <div class="text-right">        
        <button class="btnLogin" type="submit"> Ingresa</button>
        <button class="btnRegister" type="submit">Registrate</button>
        
        
        </div>
 
      
    
        
      </nav>
    </div>
  );
};

// Navbar.propTypes = {

// };

export default Navbar;
