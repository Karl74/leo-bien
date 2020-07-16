import React, { Component } from 'react'
import {AppConsumer} from "../context"
import SidebarBtn from "./SidebarBtn"

export default class LessonDisplay extends Component {
  constructor(props){
    super(props);
    this.playAudio = ()=> {
      this.voz.play()
    }
  }
  render() {
    return (
      <div className="jumbotron bg-transparent text-center mx-auto">
        <AppConsumer>
          {value=>{
            const {text} = value.onDisplay[value.slideIndex]
            const {sound}= value.onDisplay[value.slideIndex]
            const playAudio = ()=>{
              let itemAudio = ""
              itemAudio= new Audio(sound)
              itemAudio.play()
              console.log(sound)
              }
            return (
          <div className="card border-warning bg-transparent">
            <div className="card-body">
              <h1 className="lesson-text">{text}</h1>
              <div className="d-flex justify-content-between">
                <SidebarBtn name="anterior" action={value.prevSlide}/>
                <svg onClick={()=>playAudio()} className="bi bi-volume-up text-light" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04L4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04z"/>
                    <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                    <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                    <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z"/>
                </svg>
                <SidebarBtn name="siguiente" action={value.nextSlide} />
              </div>
            </div>
          </div>
            )
          }}
        </AppConsumer>        
      </div>
    )
  }
}