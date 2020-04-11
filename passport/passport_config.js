const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const MongoUtils = require("../db");
const bcrypt = require("bcrypt-nodejs");
function configurePassport(app) {
  const flash = require("connect-flash");
  app.use(flash());
  const bodyParser = require("body-parser");
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(
    require("express-session")({
      secret: process.env.SECRETKEY,
      resave: false,
      saveUninitialized: false,
    })
  );
}

passport.serializeUser((user, done) => {
  done(null, { id: user[0]._id });
});

passport.deserializeUser((user, done) => {
  done(null, getDocById(user.id, "login"));
});
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const userdb = await MongoUtils.getLoginByUsername(username);      
      if (userdb.length >= 1) {
        return done(
          null,
          false,
          {mensaje:"El correo ingresado ya está en uso"}
        );
      } else {
        const passwordss = bcrypt.hashSync(password);      
        const nombre = req.body.nombre;
        const username = req.body.username;
        const genero = req.body.genero;
        const tipoSangre = req.body.tipoSangre;
        const rh = req.body.rh;
        const nacimiento = req.body.nacimiento;        
        const edad = req.body.edad;        
   
        const usuario={        
          nombre,username,genero,tipoSangre,rh,nacimiento,edad
        };

        const usuarioDB = await MongoUtils.insertOneDoc(
          usuario,
          "usuarios"
        );

        if (usuarioDB) {
          const user = await MongoUtils.insertOneDoc(
            { username, passwordss },
            "login"
          );
          done(null, [
            {
              username: user.ops[0].email,              
              _id: user.ops[0]._id,
            },
          ]);
        } else {
          return done(
            null,
            false,
            {mensaje:"error"}
          );
        }
      }
    }
  )
);

passport.use(
  "local-signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const userdb = await MongoUtils.getLoginByUsername(username);
      if (userdb.length < 1) {
        return done(
          null,
          false,
          req.flash("signinMessage", "Usuario no encontrado")
        );
      } else if (!bcrypt.hashSync(password) == userdb.password) {
        return done(
          null,
          false,
          req.flash("signinMessage", "Usuario no encontrado")
        );
      }
      done(null, userdb);
    }
  )
);

module.exports = configurePassport;
