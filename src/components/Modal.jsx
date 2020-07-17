import React from 'react'
import {AppConsumer} from "../context"

export default function Modal() {
  return (
    <AppConsumer>
      {value=>{
        const {modalOpen, result} = value
        console.log(result)
        const message = (result)?"¡Muy Bien!":"Lo siento intentalo otra vez"
        if(!modalOpen){
          return null;
        } else {
          return(
            <div className="container d-flex justify-content-center modalCard">
              <div className="card mb-3 w-50">
                <div className="row no-gutters p-3">
                  <div className="col-sm-4 col-md-4 mx-auto">
                    <img src="../img/lion150.png" className="card-img" alt="..."/>
                  </div>
                  <div className="col-sm-12 col-md-8 px-sm-1 px-5">
                    <div className="card-body">
                      <h3 className="card-title">{message}</h3>
                      <button className="btn btn-danger" onClick={()=>value.closeModal()}>Siguiente</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }}
    </AppConsumer>
  )
}
