import React from 'react';
import { range } from '../../utils';

function Guess({value, numGuesses, index}) {
  console.info({value, numGuesses});
  return (
    <p className="guess">
      {index < numGuesses ?
        value.split('').map((letter, i) => (
          <span className="cell" key={i}>{letter}</span>
        )) :
        range(5).map((i) => (
          <span className="cell" key={i}> </span>
        ))
      }
    </p>
  );
}

export default Guess;
