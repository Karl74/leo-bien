import firebaseconfig from "./firebaseIndex"
import firebase from "firebase"

export const authMethods = {
  signUp: (email, password, setErrors, setToken)=>{
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async res=> {
        //crear la varibale token
          
        //guardar token en local storage

        //enviar token al state usando el hook setToken y tomando la informacion de token
        console.log(res)
      })
      .catch(err => {
        //set error hook method stores the error message at state
      })
  },

  logIn: (email, password, setErrors, setToken)=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async res => {
        //crear la varibale token

        //guardar token en local storage

        // enviar token al state usando el hook setToken y tomando la informacion de lo almacenado en la ventana
        
        //console.log res
        console.log(res)
      })
      .catch(err => {
        //set error hook method stores the error message at state
      })

  },

  signOut: (setErrors, setToken) => {
    firebase.auth().signOut()
      .then(res => {
        localStorage.removeItem("token")
          //hook method set token as null
                // pienso que en lugar de null deveria de ser "" para tener un mejor manejo de autho === true        
      })
        .catch(err => {
          // setErrors toma los mensajes
          
          // limpia local storage
          localStorage.removeItem("token")

          //hook method set token as null

          //console.log mensajes

        })
  }
}