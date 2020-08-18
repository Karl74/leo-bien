import React from 'react'
import Title from "../title"
import {Link} from "react-router-dom"
import {authoSource} from "../../Providers/LoginProvider"

export default function LogIn() {
const {inputs, setInputs, error,setErrors,handleLogIn} = authoSource

  return (
    <div>
      <div className="jumbotron py-2 text-center bg-title mb-1">
        <Title act="login"/>
      </div>
  
      <div className="jumbotron p-5 bg-board mb-1">
        <div className="jumbotron p-5 bg-white w-75 mx-auto">
          <form>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control"/>
                
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="my-1">
                <button type="submit" className="btn btn-primary btn-lg btn-block mw-100 ">Log in </button>
              </div>
              <Link to= "/signup">
                <div className="my-1">
                  <button type="link" className="btn btn-success btn-lg btn-block mw-100 ">Create a new account </button>
                </div>
              </Link>
            </form>
                
        </div>
      </div>
    </div>
  )
}
