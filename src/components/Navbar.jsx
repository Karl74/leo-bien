import React from 'react'
import {Link} from "react-router-dom"
import {AppConsumer} from "../context"
import {withRouter} from "react-router-dom"

export default function Navbar(props) {
  return (
    <AppConsumer>
      {value=>{
        const{prevAct} = value
        const backLink = `/exclusive/${prevAct}`
        console.log(backLink)

      return(
        <header className="container">
          <nav className="d-flex align-items-center justify-content-between mb-md-0">
            <h1 className="textHeader">LEO BIEN</h1>
            <div>
            <Link to="/">
                <button className="btn btn-lg btn-danger m-1" style={{minWidth:"7rem"}} onClick={()=>value.backToHome()}>Salir</button>
              </Link>
              
              <Link to="/exclusive">
                <button className="btn btn-lg btn-primary m-1" style={{minWidth:"7rem"}} onClick={()=>value.backToHome()}>Inicio</button>
              </Link>

              <Link to={backLink}>
                <button className="btn btn-lg btn-success m-1" style={{minWidth:"7rem"}}>Regresar</button>
              </Link>
            </div>
          </nav> 
        </header> 
      )  
      }}
    </AppConsumer>
  )
}

