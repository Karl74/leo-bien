import React from 'react'
import LetterCardMenu from "./LetterCardMenu"
import {AppConsumer} from "../../context"

export default function Vocales() {
  return (
    <div className="container p-1">
      <div className="d-flex aling-items-start justify-content-around">
        <AppConsumer>
          {value=>{
            return (value.dataVocales.map((letter)=>
                <LetterCardMenu key={letter.lt} cardText= {letter.head}
                letter={letter} link="/exclusive/vocales"
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


