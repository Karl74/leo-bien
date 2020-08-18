import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom"
import Default from "./components/Default"
import LogIn from "./components/accessComponents/LogIn"
import SignUp from "./components/accessComponents/SignUp"
import PrivateRoute from "./components/accessComponents/PrivateRoute"
import StartApp from "./components/StartApp"


function App() {
  return (
    <React.Fragment>

      <div className="container">
        <img src="../img/lion150.png" alt="Lion Leo" className="float-left"/> 

        <Router>
          <Switch>
            <Route exact path="/" component={LogIn}/>
            <Route path="/signup" component={SignUp}/>
            <PrivateRoute path="/exclusive" component={StartApp} />
            <Route component={Default}/>
          </Switch>
        </Router>  
      </div>
    </React.Fragment>
  );
}

export default App;
