import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({guesses}) {
  console.info({guesses});
  function guessed(index) {
    return (index) => {
      if (index < guesses.length) {
        return guesses[index].guess;
      }
      return '';
    };
  };

  return <div className="guess-results">
      {guesses.map((guess, index) => (
        <p className="guess" key={index}>{guess}</p>
      ))}
    </div>;
}

export default GuessResults;
