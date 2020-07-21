import React from 'react'

export default function AnswerCard({text, feedback, img}) {
  return (
      <div className="col-4" onClick={feedback}>
        <div className="buttonize shadow grow rounded m-2 py-1">
          <img src={img} alt="anwserchoice"/>
          <p className="practice-text h5">{text}</p>
        </div>  
      </div>
  )
}
