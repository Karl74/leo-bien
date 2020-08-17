import React, {useState} from 'react'


export const authoSource = React.createContext()

export const LoginProvider =(props) => {

  const [autho, setAutho] = useState(true)
  const [inputs, setInputs] = useState([])
  const [errors, setErrors] = useState([])
  const [token, setToken] = useState(null)

  const handleSignUp = () => {
    console.log(inputs)
  }

  const handleLogIn = () => {
    console.log(inputs)
  }

  const handleSignOut = () => {
    console.log("bye")
  }

  const clearErrors = () => {
    setErrors("")
  }

  return (
    <authoSource.Provider
      value={{
        autho, setAutho,
        inputs, setInputs,
        errors, setErrors,
        token, setToken,
        handleLogIn, handleSignUp,
        handleSignOut, clearErrors
      }}
    >
    {props.children}
    </authoSource.Provider>
  )
}
 