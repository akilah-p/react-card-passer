import { createContext, useState } from 'react';
import { initialCards } from '../cards-data.js';

const GameContext = createContext();

const GameProvider = ({ kids }) => {
    //this is going to be where state is defined
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  return (
    <GameContext.provider value={{
      deck,
      setDeck,
      selectedCard,
      setSelectedCard,
      playerOneHand,
      playerTwoHand,
      playerThreeHand,
      to,
      setTo,
    }}
    >
      {kids}
    </GameContext.provider>
  );
};

export { GameContext, GameProvider };
