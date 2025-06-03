import React from 'react';
import { range } from '../../utils';

function Guess({ value, guessStatus }) {

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
