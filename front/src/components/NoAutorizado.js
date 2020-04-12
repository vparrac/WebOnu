import React from "react";
import "../css/noAutorizado.css";

const NoAutorizado = () => {
  return (
    <div className="container">
      <div className="ops">Ooops, parece que no tienes acceso.</div>
      <div className="ops2">Ingresa para acceder al recurso que buscas</div>
      <hr></hr>
      <div className="row justify-content-center h-100">
        <img src="./no.png" class="img-fluid j" alt="No autorizado" />>
      </div>
    </div>
  );
};

export default NoAutorizado;
