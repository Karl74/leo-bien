import React, { Component } from 'react'
import Vocales from "./Vocales"
import Consonantes from "./Consonantes"
import Diafonos from "./Diafonos"
import Lecturas from "./Lecturas"
import Oraciones from "./Oraciones"
import Videos from "./Videos"
import Inicio from "./Inicio"
import {AppConsumer} from "../../context"




export default class HomeContent extends Component {
  render() {
    return (
      <div>
        <AppConsumer>
          {(value)=>{
            const{prevAct}=value
            switch (prevAct){
              case 'inicio':
                return (<Inicio/>)
                break;
              case 'vocales':
                return (<Vocales/>)
                break;
              case 'consonantes':
              return (<Consonantes/>)
              break;
              case 'diafonos':
                return (<Diafonos/>)
                break;
              case 'lecturas':
              return (<Lecturas/>)
              break;
              case 'oraciones':
                return (<Oraciones/>)
                break;
              case 'videos':
              return (<Videos/>)
              break;

                
              default: console.log("no encuento nada")
            }
             
          }}
        </AppConsumer>
      </div>
    )
  }
}
