import React, {useState} from "react";
import makesData from './components/makes'
import shuffle from "shuffle-array";
import './components/styles/main.css'

const App = props => {
  const [makes, setMakes] = useState(makesData)

let content = (
  <div className="container">
    {shuffle(makes).map((mk) => {
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
