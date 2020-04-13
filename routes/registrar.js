var express = require('express');
var router = express.Router();

const mu = require('../db.js');

router.post('/RegistrarFatiga', function (req, res, next) {
  mu.insertOneDoc(req.body, 'fatiga').then(() => {
    res.json({ exito: 'exito' });
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
