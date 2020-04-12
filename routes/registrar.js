var express = require('express');
var router = express.Router();

const mu = require('../db.js');

router.post('/RegistrarFatiga', function (req, res, next) {
  mu.insertOneDoc(req.body, 'fatiga').then(() => {});
});

router.post('/RegistrarFiebre', function (req, res, next) {
  mu.insertOneDoc(req.body, 'fiebre').then(() => {});
});

router.post('/RegistrarTos', function (req, res, next) {
  mu.insertOneDoc(req.body, 'tos').then(() => {});
});

router.post('/RegistrarDolor', function (req, res, next) {
  mu.insertOneDoc(req.body, 'dolor').then(() => {});
});

router.post('/RegistrarCongestion', function (req, res, next) {
  mu.insertOneDoc(req.body, 'congestion').then(() => {});
});

router.post('/RegistrarDiarrea', function (req, res, next) {
  mu.insertOneDoc(req.body, 'diarrea').then(() => {});
});

router.post('/RegistrarDolorCabeza', function (req, res, next) {
  mu.insertOneDoc(req.body, 'dolorCabeza').then(() => {});
});

router.post('/RegistrarDificultadRespirar', function (req, res, next) {
  mu.insertOneDoc(req.body, 'dificultadRespirar').then(() => {});
});

module.exports = router;
