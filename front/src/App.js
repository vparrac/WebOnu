import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import BodyHome from "./components/BodyHome";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";
import RegisterComplete from "./components/RegisterComplete";
import { Redirect } from "react-router";

const isAuthenticate=()=>{
  console.log("ISauhusd");
  fetch("/getUser", { credentials: "include" }).then((res) => {
    console.log(res);
    if (res.status == 200) {      
      return true;
    } else {
      return false;
    }
  });  
}
const MyRouter = (props) => {
  console.log("asdsi");
  console.log(isAuthenticate());
  return true?<Route {...props}></Route>:
 <Redirect to="/login"></Redirect>
};
function App() {

 
  const [user, setUser] = useState(null);
  useEffect(() => {}, [user]);
  return (
    <Router>
      <Navbar></Navbar>
      <Route path="/" exact component={BodyHome}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/register" exact component={Register}></Route>
      <MyRouter path="/menu" component={Menu}></MyRouter>
      <Route
        path="/registerComplete"
        exact
        component={RegisterComplete}
      ></Route>
      <Footer></Footer>
    </Router>
  );
}

export default App;
