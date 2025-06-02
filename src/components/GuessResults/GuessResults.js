import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

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
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <p className="guess">
          {i < guesses.length ?
            guesses[i].split('').map((letter, index) => (
              <span className="cell" key={index}>{letter}</span>
            )) :
            range(5).map((index) => (
              <span className="cell" key={index}> </span>
            ))
          }
        </p>
      ))}
    </div>;
}

export default GuessResults;
