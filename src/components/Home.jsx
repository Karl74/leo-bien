import React from 'react'
import Sidebar from "./Sidebar"
import HomeContent from "./homeContent/HomeContent";
import Title from "./title";
import {AppConsumer} from "../context"

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="jumbotron py-2 text-center bg-title mb-1">
        <AppConsumer>
          {value=>{
            const{prevAct} = value
            var title = (prevAct !== "inicio")? prevAct: "Bienvenido"
            return (
              <Title act={title}/>
            )
          }}
        </AppConsumer>
      </div>

      <div className="jumbotron py-1 px-1 bg-board mb-1">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-md-2 px-0">
              <Sidebar/>
            </div>
            <div className="col-sm-10 col-md-10">
            <HomeContent/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
