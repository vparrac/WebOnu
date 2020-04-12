import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Menu from "./Menu";
import NoAutorizado from "./NoAutorizado";

export const RegistrarDificultadRespirar = (props) => {
  const [maxFecha, setMaxFecha] = useState(new Date());

  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [tratamiento, setTratamiento] = useState("");
  const [fecha, setCalendarFecha] = useState(new Date());
  const [frecuencia, setFrecuencia] = useState(1);
  const [dificultad, setDificultad] = useState(1);

  function handleSubmit(data) {
    const body = {
      frecuencia,
      dificultad,
      minutos,
      horas,
      tratamiento,
      fecha,
    };
    data.preventDefault();
    return fetch("/registrar/RegistrarDificultadRespirar", {
      method: "POST",
      body: JSON.stringify(body),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div>
    {props.user?( <div className="container-fluid">
        <Menu></Menu>
        <h1>Registrar dificultad de respirar</h1>
        <div className="row justify-content-center h-100">
          <div className="col-lg-10 col-12">
            <form onSubmit={handleSubmit} className="gridForm">
              <label className="form-group">
                <span>Dificultad de respirar</span>
                <input
                  value={dificultad}
                  onChange={(e) => setDificultad(e.target.value)}
                  min="1"
                  max="10"
                  type="number"
                  className="input-form form-control"
                  placeholder="Parte"
                ></input>
              </label>

              <label className="form-group">
                <span>Frecuencia</span>
                <input
                  value={frecuencia}
                  onChange={(e) => setFrecuencia(e.target.value)}
                  min="1"
                  max="10"
                  type="number"
                  className="input-form form-control"
                  placeholder="Intensidad"
                ></input>
              </label>

              <label className="form-group">
                <span>Fecha</span>
                <Calendar
                  maxDate={maxFecha}
                  onChange={(date) => setCalendarFecha(date)}
                />
              </label>

              <label className="form-group">
                <span>Duración minutos</span>
                <input
                  min="0"
                  max="59"
                  value={minutos}
                  onChange={(e) => setMinutos(e.target.value)}
                  type="number"
                  className="input-form form-control"
                  placeholder="Duración minutos"
                ></input>
              </label>

              <label className="form-group">
                <span>Duración horas</span>
                <input
                  min="0"
                  max="23"
                  type="number"
                  value={horas}
                  onChange={(e) => setHoras(e.target.value)}
                  className="input-form form-control"
                  placeholder="Duración horas"
                ></input>
              </label>

              <label className="form-group">
                <span>¿Qué hizo para tratarla?</span>
                <input
                  type="text"
                  value={tratamiento}
                  onChange={(e) => setTratamiento(e.target.value)}
                  className="input-form form-control"
                  placeholder="Tratamiento"
                ></input>
              </label>

              <button type="submit" className="btnRegister">
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>):(<div><NoAutorizado></NoAutorizado></div>)}
     
    </div>
  );
};

export default RegistrarDificultadRespirar;
