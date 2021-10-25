import Cards from './components/Cards';
import React, { useEffect, useState } from 'react'

function App() {

  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [selectedCards, setSelectedCards] = useState([1,2,3])
  const [cardData, setCardData] = useState(
    [
      {name: 'Halloween', imgUrl: 'https://theawesomedaily.com/wp-content/uploads/2017/09/halloween-pictures-17-1.jpg'},
      {name: 'Halloween2', imgUrl: 'https://theawesomedaily.com/wp-content/uploads/2017/09/halloween-pictures-17-1.jpg'},
      {name: 'Halloween3', imgUrl: 'https://theawesomedaily.com/wp-content/uploads/2017/09/halloween-pictures-17-1.jpg'},
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
    if (currentScore === 3) {
      alert('Winner')
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [currentScore]
  )

  const checkIfCardUniqueSelection = (e) => {
    console.log(e.target.name)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Card</h1>
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </header>
      <main>
        {generateAllCards()}
      </main>
    </div>
  );
}

export default App;
