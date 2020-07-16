import React from 'react'
import LetterCardMenu from "./LetterCardMenu"
import {AppConsumer} from "../../context"

export default function Consonantes() {
  return (
    <div className="container p-1">
      <div className="d-flex aling-items-start flex-wrap">
        <AppConsumer>
          {value=>{
            return (value.dataConsonantes.map((letter)=>
                <LetterCardMenu key={letter.lt} cardText= {letter.head}
                letter={letter} link="consonantes"
                  action = {value.loadConsonant}
                />
                )
              )
            }
          }
        </AppConsumer>
          
      </div>
    </div>
  )
}
