import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import BodyHome from "./components/BodyHome";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import RegisterComplete from "./components/RegisterComplete";
import { Redirect } from "react-router";

function App() {
  const [user, setUser] = useState(null);


  return (
    <div>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
