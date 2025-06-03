import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResults({guesses, answer}) {
  return <>
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        const guessStatus = checkGuess(guesses[num], answer);
        return <Guess key={num} value={guesses[num]} answer={answer} guessStatus={guessStatus}/>;
    })}
    </div>
  </>;
}

export default GuessResults;
