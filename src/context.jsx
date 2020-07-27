
import React, { Component } from 'react'
import {consonantes, currentLesson} from "./data.js" 
import {vocalesdata, randomImg} from "./dataVocales.js"
import {doubleConsonants} from "./dataDobleCons.js"

const AppContext = React.createContext()

class AppProvider extends Component {
  state ={
    prevAct:"inicio",
    dataConsonantes:consonantes,
    currentLesson:currentLesson,
    onDisplay:[],
    slideIndex:0,
    dataVocales:vocalesdata,
    doubleConsonants:doubleConsonants,
    practiceMode:false,
    quizzAnswers:[],
    modalOpen:false,
    complementLetters:[],
    result:false
  }

  backToHome=()=>{
    this.setState({prevAct:"inicio"})
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

  getDoubleConsonant =(id)=>{
    const LessonLetter = this.state.doubleConsonants.find(letter => letter.lt === id)
    return LessonLetter
  }
  loadConsonant =(id)=>{
    let tempConsontants = [...this.state.dataConsonantes]
    const index = tempConsontants.indexOf(this.getLetter(id))
    const consonant = tempConsontants[index]
    this.setState({currentLesson:consonant,
                  onDisplay:consonant.silabas,
                  slideIndex:0
    })
  }

  loadVocal = (id)=>{
    let tempVocal = [...this.state.dataVocales]
    const index = tempVocal.indexOf(this.getVocal(id))
    const vocal = tempVocal[index]
    this.setState(()=>{
        return {
          currentLesson:vocal,
          onDisplay:vocal.palabras,
          slideIndex:0,
          practiceMode:false
        }
      }, ()=>{
        this.callComplementVocals()
      })
  }

  loadDoubleConsonant =(id)=>{
    let tempDoubleConsonants = [...this.state.doubleConsonants] 
    const index = tempDoubleConsonants.indexOf(this.getDoubleConsonant(id))
    const doubleConsonant = tempDoubleConsonants[index]
    this.setState(()=>{
      return {
        currentLesson:doubleConsonant,
        onDisplay:doubleConsonant.silabas,
        slideIndex:0
      }
    })
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
    this.setState({practiceMode:false,slideIndex:0})
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
    console.log(`startPractice: ${this.state.slideIndex}`)
  }

  callComplementVocals=()=>{
    let currentLetter = this.state.currentLesson.lt
    const complementLetters = randomImg.filter(letter=> letter.lt !== currentLetter)
    this.setState({complementLetters:complementLetters})
  }

  createWrongChoices=()=>{
    let letters = [...this.state.complementLetters]
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

  shuffleAnswers=(array)=>{
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  displayQuizzAnswerChoices=()=>{
    const answers = this.getQuizzChoices()
    const shuffled = this.shuffleAnswers(answers)
    this.setState({quizzAnswers:shuffled})
  }

  nextSlide=()=>{
    const maxIndex = this.state.onDisplay.length -1
    let tempSlideindex = (this.state.slideIndex === maxIndex)? 0: this.state.slideIndex+1
    this.setState(()=>{return {slideIndex:tempSlideindex}})
  }

  
  prevSlide=()=>{
    const slideIndex = this.state.slideIndex
    let tempSlideIndex = (slideIndex !==0)?
    slideIndex-1:
    0
    this.setState({slideIndex:tempSlideIndex})
  }


  nextPractice=()=>{
    const maxIndex = this.state.onDisplay.length-1
    const nextQuestion = (this.state.slideIndex === maxIndex)?0:this.state.slideIndex+1
    this.setState(()=>{return{slideIndex:nextQuestion ,modalOpen:false}}, ()=>{this.displayQuizzAnswerChoices()})
  }

  closeModal=()=>{
    if(!this.state.result){
      this.setState(()=>{return{modalOpen:false}})
    } else {
      this.nextPractice()
    }
  }

  openModal=(text)=>{
    console.log(text)
    const currentWord = this.state.onDisplay[this.state.slideIndex]
    console.log(currentWord)
    const result = (currentWord.text === text)? true:false
    this.setState(()=>{return{result:result, modalOpen:true}})
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
          displayQuizzAnswerChoices:this.displayQuizzAnswerChoices,
          backToHome:this.backToHome,
          loadDoubleConsonant:this.loadDoubleConsonant
            }}>
          {this.props.children}
        </AppContext.Provider>
      </div>
    )
  }
}

const AppConsumer = AppContext.Consumer

export {AppProvider, AppConsumer}