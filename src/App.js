import React, { useState} from "react";
import makesData from './components/makes'
import shuffle from "shuffle-array";
import './components/styles/main.css'

const App = props => {
  const [makes, setMakes] = useState(makesData)
  const [score, setScore] = useState(0);

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

  const restartGame = () => {
    window.location.reload()
  }

  const gameStatus = itm => {
    if (itm.selected) {
      alert(`You lose - Final score is: ${score}`);
      restartGame();
    } else {
      setScore(score+1)
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
  <div>
    {/* <div className="scoreboard-container">
    </div> */}
    <div className="container">
      <div className="scoreboard">Current Score: {score}</div>
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
  </div>
)
return content
}

export default App;
