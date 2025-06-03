import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const guessStatus = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((letter) => (
        <span key={letter} className={value ? `cell ${guessStatus[letter]?.status}` : 'cell'}>
          {value ? value[letter] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
