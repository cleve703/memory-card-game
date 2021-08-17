import React, { useState} from "react";
import makesData from './components/makes'
import shuffle from "shuffle-array";
import './components/styles/main.css'

const App = props => {
  const [makes, setMakes] = useState(makesData)

  const removeItem = idx => {
    const temp = [...makes]
    temp.splice(idx, 1);
    setMakes(temp);
  }

  const addItem = itm => {
    const temp = [...makes]
    temp.concat(itm);
    setMakes(temp);
  }

  const gameStatus = itm => {
    if (itm.selected) {
      alert('you lose');
    }
  }

  const selectMake = e => {
    e.preventDefault();
    const thisMake = makes.find(mk => mk.id === e.currentTarget.id);
    gameStatus(thisMake);
    thisMake.selected = true;
    const thisMakeIndex = makes.indexOf(thisMake)
    removeItem(thisMakeIndex);
    addItem(thisMakeIndex);
  }

let content = (
  <div className="container">
    {shuffle(makes).map((mk) => {
      return(
      <div className="image-container" key={mk.key} id={mk.id} onClick={selectMake}>
        <div className="image-bg">
          <img src={mk.image} alt={mk.name.concat("-logo")} />
          <h4>{mk.name}</h4>
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
