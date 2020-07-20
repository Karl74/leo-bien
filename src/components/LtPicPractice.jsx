import React, { Component } from 'react'
import { AppConsumer } from '../context'
import AnswerCard from "./AnswerCard"

export default class LtPicPractice extends Component {
  render() {
    return (
      <div className="jumbotron bg-transparent text-center px-0 mx-auto">
        <AppConsumer>
          {value=>{
            const {quizzAnswers} = value
            return(
              <div className="card border-warning bg-transparent">
                <div className="card-body">
                  <h1 className="lesson-text">
                    {value.currentLesson.head}
                  </h1>
                  <div className="container">
                    <div className="row">
                        {quizzAnswers.map((answer, index)=>
                          <AnswerCard text={answer.text} key={index} feedback={()=>value.openModal(answer.text)}/>)}
                    </div>
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
