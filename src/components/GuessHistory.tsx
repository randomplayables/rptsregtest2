import React from 'react';
import { Guess } from '../types';
import ResultMessage from './ResultMessage';

interface GuessHistoryProps {
  guesses: Guess[];
}

const GuessHistory: React.FC<GuessHistoryProps> = ({ guesses }) => {
  if (guesses.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '1rem' }}>No guesses yet.</p>;
  }

  return (
    <section style={{ marginTop: '1rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Guess History</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {guesses.map((item, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.5rem'
            }}
          >
            <span style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>{item.guess}</span>
            <ResultMessage feedback={item.feedback} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GuessHistory;