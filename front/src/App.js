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
import Ahogo from './components/Ahogo';

const MyRouter = (props) => {
  const isAuthenticate=()=>{    
    fetch("/getUser", { credentials: "include" }).then((res) => {      
      if (res.status == 200) {      
        return true;
      } else {
        return false;
      }
    });  
  }
  const a = isAuthenticate();
  
  return true?<Route path="/menu" component={Menu}></Route>:
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
      <MyRouter ></MyRouter>
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
