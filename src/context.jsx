
import React, { Component } from 'react'
import {consonantes, currentLesson} from "./data.js" 
import {vocalesdata, randomImg} from "./dataVocales.js"

const AppContext = React.createContext()

class AppProvider extends Component {
  state ={
    prevAct:"inicio",
    dataConsonantes:consonantes,
    currentLesson:currentLesson,
    onDisplay:[],
    slideIndex:0,
    dataVocales:vocalesdata,
    practiceMode:false,
    quizzAnswers:[],
    modalOpen:false
  }


  changeAct=(act)=>{
    const app = act
    this.setState({prevAct:app})
  }
  
  getLetter =(id)=>{
    const LessonLetter = this.state.dataConsonantes.find(letter => letter.lt === id)
    return LessonLetter
  }

  getVocal = (id)=>{
    const LessonLetter = this.state.dataVocales.find(letter=>letter.lt=== id)
    return LessonLetter
  }


  loadConsonant =(id)=>{
    let tempConsontants = [...this.state.dataConsonantes]
    const index = tempConsontants.indexOf(this.getLetter(id))
    const consonant = tempConsontants[index]
    this.setState({currentLesson:consonant,
                  onDisplay:consonant.silabas
    })
  }

  loadVocal = (id)=>{
    let tempVocal = [...this.state.dataVocales]
    const index = tempVocal.indexOf(this.getVocal(id))
    const vocal = tempVocal[index]
    this.setState({currentLesson:vocal,
                  onDisplay:vocal.palabras})
  }
  displayPalabras =()=>{
    let tempCurrentLesson = this.state.currentLesson
    const palabras = tempCurrentLesson.palabras
    this.setState({ 
        slideIndex:0,
        onDisplay:palabras})
  }

  displayOraciones=()=>{
    let tempCurrentLesson = this.state.currentLesson
    const oraciones = tempCurrentLesson.oraciones
    this.setState({
      slideIndex:0,
      onDisplay:oraciones})
  }

  displaySilabas=()=>{
    let tempCurrentLesson = this.state.currentLesson
    const silabas = tempCurrentLesson.silabas
    this.setState({
      slideIndex:0,
      onDisplay:silabas})
  }

  displayVocalesPalabras=()=>{
    this.setState({practiceMode:false})
  }

  getVocalLabel = ()=>{
    const vocalLetter = this.state.currentLesson.lt
    return vocalLetter
  }

  startPractice = ()=>{
    this.setState(()=>{
      return{slideIndex:0, practiceMode:true}
    },()=>{
      this.displayQuizzAnswerChoices()
    })
    console.log(this.state.slideIndex)
  }

  callComplementLetters=()=>{
    let currentLetter = this.state.currentLesson.lt
    const complementLetters = randomImg.filter(letter=> letter.lt !== currentLetter)
    return complementLetters
  }

  createWrongChoices=()=>{
    let complementLetters = this.callComplementLetters()
    let letters = [...complementLetters]
    let firstIndex = Math.floor(Math.random()*4)
    let secondIndex = Math.floor(Math.random()*3)
    let deleteOne= letters.splice(firstIndex,1)
    let deleteTwo= letters.splice(secondIndex,1)
    let wrongChoices = []
    wrongChoices.push(letters[0].palabras[Math.floor(Math.random()*2)])
    wrongChoices.push(letters[1].palabras[Math.floor(Math.random()*2)])
    return wrongChoices
  }

  getQuizzChoices=()=>{
    const currentWords = this.state.onDisplay[this.state.slideIndex]
    const wrongAnswers = this.createWrongChoices()
    const quizzAnswers = [...wrongAnswers, currentWords]
    return quizzAnswers
  }

  displayQuizzAnswerChoices=()=>{
    const answers = this.getQuizzChoices()
    for(let i = answers.length-1; i > 0; i--){
      let j= 0
      j = Math.floor(Math.random()*(i + 1))
        [answers[i], answers[j] = answers[j], answers[i]]
    }
    this.setState({quizzAnswers:answers})
  }

  nextSlide=()=>{
    const maxIndex = this.state.onDisplay.length -1
    let tempSlideindex = (this.state.slideIndex === maxIndex)? 0: this.state.slideIndex+1
    this.setState({slideIndex:tempSlideindex})
  }

  nextPractice=()=>{
    this.nextSlide()
    this.displayQuizzAnswerChoices()
  }

  prevSlide=()=>{
    const slideIndex = this.state.slideIndex
    let tempSlideIndex = (slideIndex !==0)?
    slideIndex-1:
    0
    this.setState({slideIndex:tempSlideIndex})
  }

  closeModal=(text)=>{
    console.log(text)
    this.setState({modalOpen:false})
  }

  openModal=(text)=>{
    console.log(text)
    this.setState({ModalOpen:true})
  }

  render() {
    return (
      <div>
        <AppContext.Provider 
          value={{...this.state,
          changeAct:this.changeAct,
          loadConsonant:this.loadConsonant,
          displayPalabras:this.displayPalabras,
          displayOraciones:this.displayOraciones,
          displaySilabas:this.displaySilabas,
          nextSlide:this.nextSlide,
          prevSlide:this.prevSlide,
          loadVocal:this.loadVocal,
          displayVocalesPalabras:this.displayVocalesPalabras,
          displayVocalesPractica:this.displayVocalesPractica,
          nextPractice:this.nextPractice,
          startPractice:this.startPractice,
          openModal:this.openModal,
          closeModal:this.closeModal,
          displayQuizzAnswerChoices:this.displayQuizzAnswerChoices
            }}>
          {this.props.children}
        </AppContext.Provider>
      </div>
    )
  }
}

const AppConsumer = AppContext.Consumer

export {AppProvider, AppConsumer}