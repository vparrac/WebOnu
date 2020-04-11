import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import BodyHome from "./components/BodyHome";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    
  }, [user]);
  return (
    <Router>
      <Navbar></Navbar>

      <Route path="/" exact component={BodyHome}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/register" exact component={Register}></Route>
      <Route path="/menu" exact component={Menu}></Route>
      <Footer></Footer>
    </Router>
  );
}

export default App;
