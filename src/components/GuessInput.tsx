import React, { useState, FC, FormEvent, ChangeEvent } from 'react';

interface GuessInputProps {
  onGuess: (guess: number) => void;
  disabled?: boolean;
}

const GuessInput: FC<GuessInputProps> = ({ onGuess, disabled = false }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const guessNumber = parseInt(inputValue, 10);
    if (!isNaN(guessNumber)) {
      onGuess(guessNumber);
      setInputValue('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}
    >
      <input
        type="number"
        min="1"
        max="100"
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        placeholder="Enter your guess"
        style={{ marginRight: '0.5rem', padding: '0.5rem', width: '4rem' }}
      />
      <button
        type="submit"
        disabled={disabled || inputValue.trim() === ''}
        style={{ padding: '0.5rem 1rem' }}
      >
        Guess
      </button>
    </form>
  );
};

export default GuessInput;