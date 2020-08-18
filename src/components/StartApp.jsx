import React from 'react';
import {AppProvider} from "../context"
import Navbar from "./Navbar.jsx";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom"
import Home from "./Home.jsx";
import LeccionCons from "./LeccionCons"
import LeccionLec from "./LeccionLec"
import LeccionOra from "./LeccionOra"
import LeccionVideos from "./LeccionVideos"
import LeccionVoc from "./LeccionVoc"
import LeccionDia from "./LeccionDia"

function App() {
  return (
    <AppProvider>
      
        <Navbar/>
          <Router>
            <Switch>
              <Route path="/exclusive/vocales" component={LeccionVoc}/>
              <Route path="/exclusive/consonantes" component={LeccionCons}/>
              <Route path="/exclusive/dia" component={LeccionDia}/>
              <Route path="/exclusive/lecturas" component={LeccionLec}/>
              <Route path="/exclusive/oraciones" component={LeccionOra}/>
              <Route path="/exclusive/videos" component={LeccionVideos}/>
              <Route path="/exclusive" component={Home}/>
            </Switch>
          </Router>
      
    </AppProvider>
  );
}

export default App;
