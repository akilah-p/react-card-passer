import { createContext, useState } from 'react';
import { initialCards } from '../cards-data.js';

const GameContext = createContext();

const GameProvider = ({ kids }) => {
    //this is going to be where state is defined
};

export { GameContext, GameProvider };
