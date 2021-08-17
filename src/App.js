import { div } from "prelude-ls";
import React, {useState} from "react";
import makes from './components/makes'
import './components/styles/main.css'

const App = props => {

let content = (
  <div className="container">
    {makes.map((mk) => {
      return(
      <div className="image-container">
        <div className="image-bg" key={mk.key}>
          <img src={mk.image} alt={mk.make.concat("-logo")} />
          <h4>{mk.make}</h4>
        </div>
      </div>  
      )
    }
  )}  
  </div>
)
return content
}

export default App;
