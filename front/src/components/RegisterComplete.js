import React from "react";
import {Link} from "react-router-dom";

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
                Su registro fue creado con éxito, ya puede <Link to="/login"> ingresar </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default RegisterComplete;
