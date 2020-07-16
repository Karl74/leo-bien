import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {AppConsumer} from "../../context"

// export default function LetterCardMenu({cardText}) {
//   return (
//     <Link to="/consonantes">
//       <div className="m-1">
//         <div className="card px-3 buttonize">
//           <img src="../../img/mom50.png" alt="" className="card-img-top"/>
//           <div className="card-body p-0">
//             <h3 className="card-title  text-danger text-center m-0">{cardText}</h3>
//           </div>  
//         </div>
//       </div>
//     </Link>
//   )
// }



export default class LetterCardMenu extends Component {
  render() {
    const {lt, head, mainP} = this.props.letter
    return (
      <div className="m-1">
        <AppConsumer>
          {value =>(
              <div className="card px-3 buttonize" onClick={()=>this.props.action(lt)}>
                <Link to ={this.props.link}>
                  <img src={mainP} alt="mama" className="card-img-top"/>
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
