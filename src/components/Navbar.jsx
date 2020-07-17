import React from 'react'
import {Link} from "react-router-dom"
import {AppConsumer} from "../context"

export default function Navbar() {
  return (
    <AppConsumer>
      {value=>{
      return(
        <header className="container">
          <nav className="d-flex align-items-center justify-content-between mb-md-0">
            <h1 className="textHeader">LEO BIEN</h1>
            <div>
              <Link to="/">
                <button className="btn btn-lg btn-warning m-1">Regresar</button>
              </Link>

              <Link to="/">
                <button className="btn btn-lg btn-danger m-1" onClick={()=>value.backToHome()}>Inicio</button>
              </Link>
            </div>
          </nav> 
        </header> 
      )  
      }}
    </AppConsumer>
  )
}

