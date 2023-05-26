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

  const [cards, setCards] = useState(initialCards)

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

  const handleCardClick = () => {

  }

  return (
    <div>
      <Header />
      {cards.map(card => {
        return <Card />
      })}
    </div>
  );
}

export default App;
