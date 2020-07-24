import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {AppConsumer} from "../../context"

export default class LetterCardMenu extends Component {
  render() {
    const {lt, head, mainP, word} = this.props.letter
    return (
      <div className="m-1">
        <AppConsumer>
          {value =>(
              <div className="card px-3 buttonize" onClick={()=>this.props.action(lt)}>
                <Link to ={this.props.link}>
                  <div className="pictureFrame" style={{minHeight:"4.7em"}}>
                    <img src={mainP} alt={word} className="" style={{maxWidth:"4em", verticalAling:"text-bottom"}}/>
                  </div>
                
                  <div className="car-body p-0">
                    <h3 className="card-title text-danger text-center m-0">{head}</h3> 
                  </div>
                </Link>
              </div>
                )}
          </AppConsumer>
        </div>
    )
  }
}
