import React from 'react'
import Title from "../title"
import {Link} from "react-router-dom"

export default function LogIn() {
  return (
    <div>
      <div className="jumbotron py-2 text-center bg-title mb-1">
        <Title act="Sign Up"/>
      </div>
        
    
    
      <div className="jumbotron p-5 bg-board mb-1">
        <div className="jumbotron p-5 bg-white w-75 mx-auto">
          <form w-75>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control"/>
                
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="my-1">
                <button type="submit" className="btn btn-primary btn-lg btn-block mw-100 "> Sign Up </button>
              </div>
            </form>
              <Link to= "/login">
                Do you already hava an account?
                <div className="my-1">
                  <button type="submit" className="btn btn-success btn-lg btn-block mw-100 "> Please log In </button>
                </div>
              </Link>
                
        </div>
      </div>
    </div>
  )
}
