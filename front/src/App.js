import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import BodyHome from './components/BodyHome';
function App() {
  return (
    <div>
      <div className="container-fluid">
        <Navbar></Navbar>        
      </div>
      <BodyHome></BodyHome>
      <div className="container">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
