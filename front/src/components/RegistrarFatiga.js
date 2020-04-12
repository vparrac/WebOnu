import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const RegistrarFatiga = () => {
  const [maxFecha, setMaxFecha] = useState(new Date());

  const [fecha, setCalendarFecha] = useState(new Date());

  const [numeroFatiga, setNumeroFatiga] = useState(1);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [tratamiento, setTratamiento] = useState('');

  function handleSubmit(data) {
    const body = {
      numeroFatiga,
      minutos,
      horas,
      tratamiento,
      fecha,
    };
    data.preventDefault();
    return fetch('/registrar/RegistrarFatiga', {
      method: 'POST',
      body: JSON.stringify(body),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="container-fluid">
      <h1>Registrar fatiga</h1>
      <div className="row justify-content-center h-100">
        <div className="col-lg-10 col-12">
          <form onSubmit={handleSubmit} className="gridForm">
            <label className="form-group">
              <span>¿Cuanta fatiga sintió en una escala del 1 al 10?</span>
              <input
                value={numeroFatiga}
                onChange={(e) => setNumeroFatiga(e.target.value)}
                min="1"
                max="10"
                type="number"
                className="input-form form-control"
                placeholder="Fatiga"
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
                value={horas}
                onChange={(e) => setHoras(e.target.value)}
                type="number"
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
    </div>
  );
};

export default RegistrarFatiga;
