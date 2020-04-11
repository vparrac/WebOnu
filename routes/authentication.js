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

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/authentication/signin",
    failureRedirect: "/authentication/signup",
    passReqToCallback: true,
  })
);

/**
 * Método para inciar sesión
 */
// router.post(
//   "/signin",
//   passport.authenticate("local-signin", {
//     successRedirect: "/",
//     failureRedirect: "/authentication/signin",
//     passReqToCallback: true,
//   })
// );

router.post("/singin", (req, res, next) => {
  passport.authenticate("local-signin", function (err, user, info) {
    console.log(req.body);
    console.log("Err",err);
    console.log("Usr",user);
    console.log("Info",info);
    if (user===false) {
      res.statusMessage = "Usuario o contraseña incorrectos";
      res.status(400).end();
    }
    return res.json({ hola: "hola" });
  })(req, res, next);
});

router.get("/getUser", (req, res) => {
  return res.json(req.user || null);
});

module.exports = router;
