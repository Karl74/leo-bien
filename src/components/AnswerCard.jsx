import React from 'react'

export default function AnswerCard({text, feedback, img}) {
  return (
      <div className="col-4" onClick={feedback}>
        <div className="buttonize shadow grow rounded m-2 py-1">
          <div style={{minHeight:"8.1rem"}}>
              <img src={img} alt="anwserchoice"/>
          </div>
          <div>
              <p className="practice-text h5">{text}</p>
          </div>
        </div>  
      </div>
  )
}
