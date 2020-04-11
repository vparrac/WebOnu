import React from "react";
import PropTypes from "prop-types";

const RegisterComplete = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="mss">
            <div className="card-headerLogin">
              <h3>Registro creado con éxito</h3>
            </div>
            <p>
                Su registro fue creado con éxito, ya puede <a href="/login"> ingresar </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

RegisterComplete.propTypes = {};

export default RegisterComplete;
