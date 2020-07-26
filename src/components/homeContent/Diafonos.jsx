import React from 'react'
import LetterCardMenu from './LetterCardMenu'
import {AppConsumer} from "../../context"


export default function Diafonos() {
  return (
    <div className="container p-1">
      <div className="d-flex aling-items-start flex-wrap">
        <AppConsumer>
          {value=>{
            return (value.doubleConsonants.map((letter)=>
                <LetterCardMenu key={letter.lt}
                letter={letter} link="diafonos"
                  action = {value.loadDoubleConsonant}
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
