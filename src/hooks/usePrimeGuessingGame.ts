import { useState, useEffect, useCallback } from 'react';
import { initGameSession, saveGameData } from '../services/apiService';
import { generateRandomPrime } from '../utils/primeUtils';
import { Guess } from '../types';

export function usePrimeGuessingGame() {
  const [sessionId, setSessionId] = useState<string>('');
  const [targetPrime, setTargetPrime] = useState<number>(() => generateRandomPrime());
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    async function initialize() {
      const data = await initGameSession();
      if (data && data.sessionId) {
        setSessionId(data.sessionId);
      }
    }
    initialize();
  }, []);

  const handleGuess = useCallback((guess: number) => {
    if (status === 'correct') {
      return;
    }
    let feedback: Guess['feedback'];
    if (guess < targetPrime) {
      feedback = 'too low';
    } else if (guess > targetPrime) {
      feedback = 'too high';
    } else {
      feedback = 'correct';
    }
    const guessEntry: Guess = { guess, feedback };
    setGuesses(prev => [...prev, guessEntry]);
    setStatus(feedback);

    const roundNumber = guesses.length + 1;
    if (sessionId) {
      saveGameData(sessionId, roundNumber, guessEntry);
    }
  }, [status, targetPrime, sessionId, guesses.length]);

  const handleRestart = useCallback(() => {
    setTargetPrime(generateRandomPrime());
    setGuesses([]);
    setStatus('');
    initGameSession().then(data => {
      if (data && data.sessionId) {
        setSessionId(data.sessionId);
      }
    });
  }, []);

  return {
    guesses,
    status,
    onGuess: handleGuess,
    onRestart: handleRestart,
    disabled: status === 'correct'
  };
}