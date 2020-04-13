import React from "react";
import {Link} from "react-router-dom";

const CerroSesion = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="mss">
          <br></br>
            <div className="card-headerLogin">
              <h3>Sesión cerrada con éxito</h3>
            </div>
            <p>
                Su sesión se cerró con éxito, puede cerrar esta ventana o <Link to="/"> volver a la página principal </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default CerroSesion;
