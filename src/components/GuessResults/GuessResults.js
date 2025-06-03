import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessResults({guesses}) {
  console.info({guesses});

  return <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
         <Guess key={i} value={guesses[i]} numGuesses={guesses.length} index={i}/>
      ))}
    </div>;
}

export default GuessResults;
