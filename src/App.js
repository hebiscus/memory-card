import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';

function App() {

  const initialCards = [
    {src: "", id: 0},
    {src: "", id: 1},
    {src: "", id: 2},
    {src: "", id: 3},
    {src: "", id: 4},
    {src: "", id: 5},
    {src: "", id: 6},
    {src: "", id: 7},
    {src: "", id: 8},
  ];

  const [cards, setCards] = useState(initialCards);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // useEffect(() => {
  //   function shuffleArray(array) {
  //     for (let i = array.length - 1; i > 0; i--) {
  //         const j = Math.floor(Math.random() * (i + 1));
  //         [array[i], array[j]] = [array[j], array[i]];
  //     }

  //     const shuffledCards = shuffleArray(cards);
  //     setCards(shuffledCards)
  //   }

  //   shuffleArray(initialCards)
  // }, [cards])

  const handleCardClick = (e) => {
    console.log(e.target.id)
    setCurrentScore(count => count + 1)
  }

  return (
    <div className='app-content'>
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <div className='cards-container'>
      {cards.map(card => {
        return <Card key={card.id} id={card.id} handleCardClick={handleCardClick}/>
      })}
      </div>
    </div>
  );
}

export default App;
