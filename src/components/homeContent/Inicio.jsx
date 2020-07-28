import React from 'react'

export default function Inicio() {
  return (
    <div>
      <p className="text-white my-1">
      Thanks for being a LeoBien subscriber. LeoBien is a presentation tool for bilingual teachers to deliver engaging reading instruction through video conference platforms like zoom or google meets. You only need to pick your letter lesson of the week and just share your screen with your class. Model how to read every practice aloud and have them repeat with you. You can also click on the audio icon and have Leo read it.
      
      </p>
      <p className="text-white my-1">
        All the modules are organized in a logical sequence to teach your students to read. Introduce the vowels first and continue with the consonants following the MSTR order. Words and sentences become more challenging as you move up on the sequence. 
        </p>
        <p className="text-white my-1">
      Please follow our blog "Leobien" to get free resources to print out.
      </p>
      <div className="d-flex flex-wrap mx-0 p-0">
        
        <div className="card m-2" style={{width:"9.5rem", maxHeight:"14rem"}}>
          <dt className="card-header p-1 text-primary">
            Vocales
          </dt>
          <img src="../../img/doc/vocales.png" className="card-img-top"  alt="..."/>
          <div className="card-body p-1 m-1">
            <dd className="card-text">
              <p className="text-muted cardText">
                Introduce the vowels first. Each letter has 10 words to show upper and lower case of the vowel.
              </p>
            </dd>
          </div>
        </div>

        <div className="card m-2" style={{width:"9.5rem", maxHeight:"14rem"}}>
          <dt className="card-header p-1 text-primary">
            Práctica
          </dt>
          <img src="../../img/doc/practica.png" className="card-img-top"alt="..."/>
          <div className="card-body p-1 m-1">
            <dd className="card-text">
              <p className="text-muted cardText">
                Use this practice module to reinforce the student awareness of the vowels and the sounds.
              </p>
            </dd>
          </div>
        </div>

        <div className="card m-2" style={{width:"9.5rem", maxHeight:"14rem"}}>
          <dt className="card-header p-1 text-primary">
            Sílabas
          </dt>
          <img src="../../img/doc/silabas.png" className="card-img-top"alt="..."/>
          <div className="card-body p-1 m-1">
            <dd className="card-text">
              <p className="text-muted cardText">Start the introduction of each consonant with this syllable blending 
              activity.</p>
            </dd>
          </div>
        </div>

        <div className="card m-2" style={{width:"9.5rem", maxHeight:"14rem"}}>
          <dt className="card-header p-1 text-primary">
            Palabras
          </dt>
          <img src="../../img/doc/palabras.png" className="card-img-top"alt="..."/>
          <div className="card-body p-1 m-1">
            <dd className="card-text">
              <p className="text-muted cardText">Each consonant contains words with previously indroduced letters.
              It is important to follow the MSTR sequence.</p>
            </dd>
          </div>
        </div>

        <div className="card m-2" style={{width:"9.5rem", maxHeight:"14rem"}}>
          <dt className="card-header p-1 text-primary">
            Oraciones
          </dt>
          <img src="../../img/doc/oraciones.png" className="card-img-top" alt="..."/>
          <div className="card-body p-1 m-1">
            <dd className="card-text">
              <p className="text-muted cardText">Add context to the reading with this sentencing practice .</p>
            </dd>
          </div>
        </div>
      </div>
    </div>
  )
}
