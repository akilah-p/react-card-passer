import './App.css';
// removed initialState in order to refactor
import Player from './components/Player';
import CardList from './components/CardList';
import { useContext } from 'react';
import ExecutePassButton from './components/ExecutePassButton';
import { GameContext } from './context/GameContext';

//remove the brackets and put it all in a const with just curly braces
function App() {
  c
  onst { deck, setDeck,
    playerOneHand, setPlayerOneHand,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    selectedCard, setSelectedCard, 
  from, 
to
} = useContext(GameContext);

functionFindCard

  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player
          player={1} hand={playerOneHand} />
        <Player player={2} hand={playerTwoHand} />
        <Player
          player={3} hand={playerThreeHand}
        />
        <CardList
          cards={deck}
          player={'deck'}
        />
      </section>
      <section>
        {selectedCard && 
          <ExecutePassButton />
        }
      </section>
    </div>
  );
}

export default App;
