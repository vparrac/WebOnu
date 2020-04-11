/**
 * Dependencia a express
 */
const express = require("express");
/**
 * Creación del router que nos permite agrupar este archivo en funcionalidades exportables
 */
const router = express.Router();

/**
 * Dependencia de Passport
 */
const passport = require("passport");

/**
 * Método para crear un usuario
 */

router.post("/signup", (req, res, next) => {
  passport.authenticate("local-signup", function (err, user, info) {
    console.log(info);
    if (user === false) {
      res.statusMessage = info.mensaje;
      res.status(400).end();
    }
    else{
      res.statusMessage = "Registro creado con éxito";
      res.status(200).end();
    }
  })(req, res, next);
});

router.post("/singin", (req, res, next) => {
  passport.authenticate("local-signin", function (err, user) {
    if (user === false) {
      res.statusMessage = "Usuario o contraseña incorrectos";
      res.status(400).end();
    }
    else{
      res.statusMessage = "Ingreso éxitoso";
      res.status(200).end();
    }
  })(req, res, next);
});

router.get("/getUser", (req, res) => {
  return res.json(req.user || null);
});

module.exports = router;
