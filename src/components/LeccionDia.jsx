import React from 'react'
import Title from "./title"
import {AppConsumer} from "../context"
import SidebarBtn from "./SidebarBtn"
import LessonDisplay from "./LessonDisplay"

export default function LeccionDia() {
  return (
    <AppConsumer>
          {value=>{
            const {head}=value.currentLesson
            return (
    <div>
            <div className="jumbotron py-2 text-center bg-title mb-1">
              <Title act={head}/>
          </div>
              <div className="jumbotron py-1 px-1 bg-board mb-1">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-10 col-md-2 px-0">
                      <nav className="d-flex flex-md-column flex-wrap mt-md-3">
                        <SidebarBtn name="Silabas" action={value.displaySilabas}/>
                        <SidebarBtn name="Palabras" action={value.displayPalabras}/>
                        <SidebarBtn name="Oraciones" action={value.displayOraciones}/>
                      </nav>
                    </div>
                    <div className="col-sm-12 col-md-10 justify-content-center">
                      <LessonDisplay/>
                      
                    </div>
                  </div>
                </div>
              </div>
    </div>
            )
          }}
        </AppConsumer>
      

  )
}
