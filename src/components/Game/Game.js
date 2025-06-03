import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  
  var correctGuess = 0;
  if (guesses[guesses.length - 1]) {
    const guessStatus = checkGuess(guesses[guesses.length - 1], answer);
    for (let i = 0; i < 5; i++) {
      if (guessStatus[i].status === 'correct') {
        correctGuess += 1;
      }
    }
  }

  return <>
    <GuessResults
      guesses={guesses}
      answer={answer}
    ></GuessResults>
    <GuessInput
      guesses={guesses}
      setGuesses={setGuesses}
      correctGuess={correctGuess}
    ></GuessInput>
    {
      (correctGuess === 5 && guesses.length <= 6) &&
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses.length} guesses</strong>.
          </p>
        </div>
    }
    {
      (guesses.length >= 6 && correctGuess !== 5) &&
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    }
  </>;
}

export default Game;
