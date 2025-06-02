import React from 'react';

function GuessInput({guesses, setGuesses}) {
  const [inputValue, setInputValue] = React.useState('');

  return <form className="guess-input-wrapper"
  onSubmit={event => {
          event.preventDefault();
          setGuesses([...guesses, inputValue]);
          console.info({inputValue});
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
      value={inputValue}
      onChange={event => {
          setInputValue(event.target.value.toUpperCase());
        }}
    />
  </form>;
}

export default GuessInput;
