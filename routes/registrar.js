var express = require('express');
var router = express.Router();

const mu = require('../db.js');

//I'll fix just one but it applies to all methods below.

/*
What I would add is exception management that notifies the
user when exceptions occur. This is done by adding Mongo's
response to the callback; also, a catch should be set for 
any exceptions that are generated in the process. This way,
you will know when the element was not saved in the database 
correctly.
*/
router.post('/RegistrarFatiga', function (req, res, next) {
  mu.insertOneDoc(req.body, 'fatiga').then((resp) => {
      return res.status(200).json({ exito: 'exito', data: resp });
  }).catch(err => {
    return res.json({exito: false, msg: 'error registrando Fatiga', error: err});
  });
});

router.post('/RegistrarFiebre', function (req, res, next) {
  mu.insertOneDoc(req.body, 'fiebre').then(() => {
    res.json({ exito: 'exito' });
  });
});

router.post('/RegistrarTos', function (req, res, next) {
  mu.insertOneDoc(req.body, 'tos').then(() => {
    res.json({ exito: 'exito' });
  });
});

router.post('/RegistrarDolor', function (req, res, next) {
  mu.insertOneDoc(req.body, 'dolor').then(() => {
    res.json({ exito: 'exito' });
  });
});

router.post('/RegistrarCongestion', function (req, res, next) {
  mu.insertOneDoc(req.body, 'congestion').then(() => {
    res.json({ exito: 'exito' });
  });
});

router.post('/RegistrarDiarrea', function (req, res, next) {
  mu.insertOneDoc(req.body, 'diarrea').then(() => {
    res.json({ exito: 'exito' });
  });
});

router.post('/RegistrarDolorCabeza', function (req, res, next) {
  mu.insertOneDoc(req.body, 'dolorCabeza').then(() => {
    res.json({ exito: 'exito' });
  });
});

router.post('/RegistrarDificultadRespirar', function (req, res, next) {
  mu.insertOneDoc(req.body, 'dificultadRespirar').then(() => {
    res.json({ exito: 'exito' });
  });
});

router.post('/RegistrarMedicina', function (req, res, next) {
  mu.insertOneDoc(req.body, 'medicina').then(() => {
    res.json({ exito: 'exito' });
  });
});

router.post('/Reporte', function (req, res) {
  mu.reporte(req.body.fecha, req.body.user).then((result) => {
    res.json(result)
  });
});

module.exports = router;
