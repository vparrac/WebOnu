import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const RegistrarFiebre = () => {
  const [maxFecha, setMaxFecha] = useState(new Date());

  const [temperatura, setTemperatura] = useState(35);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [tratamiento, setTratamiento] = useState('');
  const [fecha, setCalendarFecha] = useState(new Date());

  function handleSubmit(data) {
    const body = {
      temperatura,
      minutos,
      horas,
      tratamiento,
      fecha,
    };
    data.preventDefault();
    return fetch('/registrar/RegistrarFiebre', {
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
      <h1>Registrar fiebre</h1>
      <div className="row">
        <div className="col-lg-6 col-12">
          <form onSubmit={handleSubmit} className="gridForm">
            <label className="form-group">
              <span>Temperatura</span>
              <input
                min="35"
                max="45"
                value={temperatura}
                onChange={(e) => setTemperatura(e.target.value)}
                type="number"
                className="input-form form-control"
                placeholder="Temperatura (°C)"
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
    </div>
  );
};

export default RegistrarFiebre;
