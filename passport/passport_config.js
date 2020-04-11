const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const  MongoUtils  = require("../db");
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
    async (req, email, password, done) => {
      console.log("in");
      
      const userdb = await MongoUtils.getLoginByEmail(email);
      console.log("user", userdb);
      if (userdb.length >= 1) {
        return done(
          null,
          false,
          req.flash("signupMessage", "El correo ingresado ya está en uso.")
        );
      } else {
        const passwordss = bcrypt.hashSync(password);
        const nombreEmpresa = req.body.nombreEmpresa;
        const contacto = req.body.contacto;
        const gerente = await insertOneDoc(
          { email, nombreEmpresa, contacto },
          "gerentes"
        );

        if (gerente) {
          const user = await insertOneDoc(
            { email, passwordss, role: "gerente" },
            "login"
          );
          done(null, [
            {
              email: user.ops[0].email,
              password: passwordss,
              _id: user.ops[0]._id,
            },
          ]);
        } else {
          return done(
            null,
            false,
            req.flash("signupMessage", "Hubo un error insertando el registro")
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
      console.log("mongo",MongoUtils);
      const userdb = await MongoUtils.getLoginByUsername(username);
      console.log(userdb);
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