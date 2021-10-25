import Cards from './components/Cards';
import React, { useEffect, useState } from 'react'
import './style/App.css'
import {Angeloak, Baobab, Dragonblood, Ginko, Japanesemaple, Methuselah, Pando, Rhodododendron, Sakura, Sequoia} from './index.js'

function App() {

  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [selectedCards, setSelectedCards] = useState([1,2,3])
  const [cardData, setCardData] = useState(
    [
      {name: 'Angel Oak', imgUrl: Angeloak},
      {name: 'Baobab', imgUrl: Baobab},
      {name: 'Dragon Blood', imgUrl: Dragonblood},
      {name: 'Ginko', imgUrl: Ginko},
      {name: 'Japanese Maple', imgUrl: Japanesemaple},
      {name: 'Methuselah', imgUrl: Methuselah},
      {name: 'Pando', imgUrl: Pando},
      {name: 'Rhododendron', imgUrl: Rhodododendron},
      {name: 'Sakura', imgUrl: Sakura},
      {name: 'Sequoia', imgUrl: Sequoia},
      
    ]
  )

  const handleCardClick = (e) => {
    const card = e.target.alt;
    if (selectedCards.includes(card)) {
      setCurrentScore(0);
      setSelectedCards([]);
    } else {
      console.log(selectedCards)
      setSelectedCards([...selectedCards, card]);
      setCurrentScore(currentScore + 1);
    }
  }

  function generateAllCards() {
    return cardData.map((card) => {
      return <Cards key={card.name} name={card.name} imgUrl={card.imgUrl} onClick={handleCardClick}/>
    })
  }

  function shuffle(array) {
    const arrayCopy = [...array]
    let currentIndex = arrayCopy.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
        arrayCopy[randomIndex], arrayCopy[currentIndex]];
    }
    return arrayCopy;
  }


  useEffect(() => {
    setCardData((shuffle(cardData)));
    if (currentScore>bestScore) {
      setBestScore(currentScore)
    }
    if (currentScore === document.getElementsByTagName('img').length) {
      alert('Winner')
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [currentScore]
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Card</h1>
        <div class='score-counter'> 
          <p>Current Score: {currentScore}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </header>
      <main>
        {generateAllCards()}
      </main>
    </div>
  );
}

export default App;
