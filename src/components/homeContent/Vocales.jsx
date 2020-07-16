import React from 'react'
import LetterCardMenu from "./LetterCardMenu"
import {AppConsumer} from "../../context"

export default function Vocales() {
  return (
    <div className="container p-1">
      <div className="d-flex aling-items-start flex-wrap">
        <AppConsumer>
          {value=>{
            return (value.dataVocales.map((letter)=>
                <LetterCardMenu key={letter.lt} cardText= {letter.head}
                letter={letter} link="vocales"
                  action= {value.loadVocal}
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


