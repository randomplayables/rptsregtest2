import React from 'react';

interface HeaderProps {
  status?: string;
}

const Header: React.FC<HeaderProps> = ({ status }) => {
  return (
    <header style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
      <h1>Prime Number Guessing Game</h1>
      <p>Guess the prime number selected between 1 and 100.</p>
      {status && <p style={{ fontStyle: 'italic' }}>Status: {status}</p>}
    </header>
  );
};

export default Header;