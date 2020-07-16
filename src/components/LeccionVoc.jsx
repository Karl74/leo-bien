import React from 'react'
import Title from "./title"
import {AppConsumer} from "../context"
import SidebarBtn from "./SidebarBtn"
import LessonDisplay from "./LessonDisplay"
import LtPicPractice from "./LtPicPractice"
import Modal from "./Modal"

export default function LeccionVoc() {
  return (
    <AppConsumer>
      {value=>{
        const {head}= value.currentLesson
        const toDeploy=(value.practiceMode)? <LtPicPractice/> : <LessonDisplay/>

        return(
        <div>
          <div className="jumbotron py-2 text-center bg-title mb-1">
            <Title act={head}/>
          </div>
          <div className="jumbotron py-1 px-1 bg-board mb-1">
            <div className="container">
              <div className="row">
                <div className="col-sm-10 col-md-2 px-0">
                  <nav className="d-flex flex-md-column flex-wrap mt-md-3">
                    <SidebarBtn name="Palabras" action={value.displayVocalesPalabras}/>
                    <SidebarBtn name="Práctica" action={value.startPractice}/>
                  </nav>
                </div>
                <div className="col-sm-12 col-md-10">
                  {toDeploy}
                </div>
              </div>
            </div>
            <Modal/>
          </div>
        </div>
        )
      }}

    </AppConsumer>
    
  )
}
