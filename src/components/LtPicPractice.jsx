import React, { Component } from 'react'
import { AppConsumer } from '../context'
import AnswerCard from "./AnswerCard"

export default class LtPicPractice extends Component {
  render() {
    return (
      <div className="jumbotron bg-transparent text-center py-1 px-0 mx-auto">
        <AppConsumer>
          {value=>{
            const {quizzAnswers} = value
            const total = value.onDisplay.length 
            const progress = (value.slideIndex < 1)? (0) : ((value.slideIndex + 1) / total )
            const percent = progress *100
            console.log(percent)
            const barStyle = {width: `${percent}%`}
            return(
              <div className="card border-warning bg-transparent">
                <div className="card-body">
                  <h1 className="lesson-text">
                    {value.currentLesson.head}
                  </h1>
                  <div className="container">
                    <div className="row">
                        {quizzAnswers.map((answer, index)=>
                          <AnswerCard text={answer.text} img={answer.img} key={index} feedback={()=>value.openModal(answer.text)}/>)}
                    </div>
                  </div>
                </div>
                  <div className="m-4">
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped bg-danger" style={barStyle}></div>
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
