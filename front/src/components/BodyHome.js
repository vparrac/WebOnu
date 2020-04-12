import React from 'react';
// import PropTypes from 'prop-types';

const BodyHome = () => {
  return (
    <div className="container-fluid">
      <h1>Covid 19 - Symptoms</h1>
      
      <div className="paragraph">
        Covid-19 Symptoms es una aplicación cuyo objetivo es que cualquier
        persona que pueda presentar sintomas de COVID-19 puedan reportarlos e ir
        llevando un control de todo lo relacionado con estos. Lo único que hay
        que hacer es registrate y en la aplicación podrás ir colocando todo lo
        relacionado con el coronavirus.
      </div>
      <h2>Sintomas del coronavirus</h2>
      <div className="paragraph">
        Aunque hay pacientes con COVID-19 asintomáticas, la gran mayoría
        presentan una sintomatología común. Entre los sintomas más frecuentes se
        encuentran:
        <div className="containerImagenes">
          <div className="row">
            <div className="col">
              <img src="./fever.png" alt="..." class="img-symtoms"></img>
              <div class="overlay">
                <div class="text">Fiebre</div>
              </div>
            </div>
            <div className="col">
              <img src="./tos.svg" alt="..." class="img-symtoms"></img>
              <div class="overlay">
                <div class="text">Tos</div>
              </div>
            </div>
            <div className="col">
              <img src="./respirar.svg" alt="..." class="img-symtoms "></img>
              <div class="overlay">
                <div class="text">Ahogo</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src="./dolor.svg" alt="..." class="img-symtoms"></img>
              <div class="overlay">
                <div class="text">Dolor</div>
              </div>
            </div>
            <div className="col">
              <img src="./congestion.svg" alt="..." class="img-symtoms"></img>
              <div class="overlay">
                <div class="text">Congestion</div>
              </div>
            </div>
            <div className="col">
              <img src="./fatiga.svg" alt="..." class="img-symtoms "></img>
              <div class="overlay">
                <div class="text">Fatiga</div>
              </div>
            </div>
          </div>
        </div>
        Si tienes uno de estos sintomas comienza a registrarlos{' '}
        <a className="red" href="#">
          Aquí
        </a>
      </div>
    </div>
  );
};

export default BodyHome;
