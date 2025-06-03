import React from 'react';

function GuessInput({guesses, setGuesses, correctGuess}) {
  const [inputValue, setInputValue] = React.useState('');

  return <>
    <form className="guess-input-wrapper"
      onSubmit={event => {
              event.preventDefault();
              setGuesses([...guesses, inputValue]);
              setInputValue('');
            }}
          >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        required
        title='5 letter word'
        pattern='^[a-zA-Z]{5}$'
        disabled={correctGuess === 5 || guesses.length >= 6}
        value={inputValue}
        onChange={event => {
            setInputValue(event.target.value.toUpperCase());
          }}
      />
    </form>
  </>;
}

export default GuessInput;
