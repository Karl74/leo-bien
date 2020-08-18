import React, {useContext} from "react"
import {Route, Redirect} from "react-router-dom"
import {authoSource} from "../../Providers/LoginProvider"

function PrivateRoute ({ component:Component, ...rest }) {
  const {autho} = useContext(authoSource)
  console.log(autho)

  return(
    <Route
      {...rest}
      render = {(props) => (autho === true 
              ? <Component { ...props } />
              : <Redirect to = {{
                  pathname: "/",
                  state: {from:props.location}
                  }}  
                />
              )
      }
    />
  )
}

export default PrivateRoute