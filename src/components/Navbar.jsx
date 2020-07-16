import React from 'react'

export default function Navbar() {
  return (
    <header className="container">
      
      <nav className="d-flex align-items-center justify-content-between mb-md-0">
        <h1 className="textHeader">LEO BIEN</h1>
        <div>
          <button className="btn btn-lg btn-warning m-1">Salir</button>
          <button className="btn btn-lg btn-danger m-1">Iniciar</button>
        </div>
      </nav> 

      

    </header> 
  )
}

