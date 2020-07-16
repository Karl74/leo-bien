import React, { Component } from 'react'
import SidebarBtn from "./SidebarBtn"
import {AppConsumer} from "../context"

export default class Sidebar extends Component{
  render(){
    return (
      <AppConsumer>
          {value=>{
            return(
            <nav className= "d-flex flex-md-column flex-wrap mt-md-3">
              <SidebarBtn name= "vocales" action={value.changeAct}/>
              <SidebarBtn name= "consonantes" action={value.changeAct}/>
              <SidebarBtn name= "diafonos" action={value.changeAct}/>
              <SidebarBtn name= "lecturas" action={value.changeAct}/>
              <SidebarBtn name= "oraciones" action={value.changeAct}/>
              <SidebarBtn name= "videos" action={value.changeAct}/>
            </nav>
            )
          }}
        </AppConsumer>

    )
  }
}
