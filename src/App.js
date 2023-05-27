import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import dog from './card-pictures/dog.jpg'
import caiman from './card-pictures/caiman.jpg'
import gecko from './card-pictures/gecko.jpg'
import luzon from './card-pictures/luzon.jpg'
import parrot from './card-pictures/parrot.jpg'
import raccoon from './card-pictures/raccoon.jpg'
import sneak from './card-pictures/sneak.jpg'
import turtle from './card-pictures/turtle.jpg'


function App() {

  const initialCards = [
    {src: dog, id: 1},
    {src: caiman, id: 2},
    {src: gecko, id: 3},
    {src: luzon, id: 4},
    {src: parrot, id: 5},
    {src: raccoon, id: 6},
    {src: sneak, id: 7},
    {src: turtle, id: 8},
  ];

  const [cards, setCards] = useState(initialCards);
  const [clickedCards, setClickedCards] = useState([])
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
    const cardID = e.target.id
    
    if (!clickedCards.includes(cardID)) {
      setClickedCards([...clickedCards, cardID]);
      setCurrentScore(count => count + 1);
      console.log(clickedCards)
    } else {
      setClickedCards([]);
      setCurrentScore(0);
      console.log("uhoh, I was clicked before!")
    }
  }

  return (
    <div className='app-content'>
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <div className='cards-container'>
      {cards.map(card => {
        return <Card key={card.id} id={card.id} src={card.src} handleCardClick={handleCardClick}/>
      })}
      </div>
    </div>
  );
}

export default App;
