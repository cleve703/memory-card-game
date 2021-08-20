import React, { useEffect, useState} from "react";
import makesData from './components/makes'
import shuffle from "shuffle-array";
import './components/styles/main.css'

const App = props => {
  const [makes, setMakes] = useState(makesData);
  
  const [score, setScore] = useState(0);
  
  const [highScore, setHighScore] = useState(0);
  useEffect(() => {
    return score > highScore ? setHighScore(score) : null;
  }, [score, highScore]);

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
    const temp = [...makes];
    temp.map(mk => mk.selected = false);
    setMakes(temp);
    setScore(0);
  }

  const gameStatus = itm => {
    if (score === 24) {
      alert(`You won!!! Final score is: ${score}`)
      setHighScore(24);
      restartGame();
    } else if (itm.selected) {
      alert(`You lose - Final score is: ${score}`);
      restartGame();
    } else {
      setScore(score+1);
      return true
    }
  }

  const selectMake = e => {
    e.preventDefault();
    const thisMake = makes.find(mk => mk.id === e.currentTarget.id);
    if (gameStatus(thisMake) === true) {
      thisMake.selected = true;
      const thisMakeIndex = makes.indexOf(thisMake)
      removeItem(thisMakeIndex);
      addItem(thisMakeIndex);
    }
  }

let content = (
  <div>
    {/* <div className="scoreboard-container">
    </div> */}
    <div className="container">
      <div className="scoreboard">
        <span id="current-score">Current Score: {score}</span>
        <span id="high-score">High Score: {highScore}</span>  
      </div>
      {shuffle(makes).map((mk) => {
        return(
        <div className="image-container" key={mk.id} id={mk.id} onClick={selectMake}>
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
