import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import LeccionCons from "./components/LeccionCons"
import LeccionLec from "./components/LeccionLec"
import LeccionOra from "./components/LeccionOra"
import LeccionVideos from "./components/LeccionVideos"
import LeccionVoc from "./components/LeccionVoc"
import LeccionDia from "./components/LeccionDia"
import Default from "./components/Default"
import Login from "./components/LogIn"

function App() {
  return (
    <React.Fragment>

      <div className="container">
        <img src="../img/lion150.png" alt="Lion Leo" className="float-left"/> 
        <Navbar/>

        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/vocales" component={LeccionVoc}/>
          <Route path="/consonantes" component={LeccionCons}/>
          <Route path="/dia" component={LeccionDia}/>
          <Route path="/lecturas" component={LeccionLec}/>
          <Route path="/oraciones" component={LeccionOra}/>
          <Route path="/videos" component={LeccionVideos}/>
          <Route path="/login" component={Login}/>
          <Route component={Default}/>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
