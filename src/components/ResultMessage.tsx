import React, { FC } from 'react';

interface ResultMessageProps {
  feedback: string;
}

const ResultMessage: FC<ResultMessageProps> = ({ feedback }) => {
  if (feedback === 'correct') {
    return <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Correct!</span>;
  }

  if (feedback === 'too low') {
    return <span style={{ color: 'var(--color-secondary)' }}>Too low</span>;
  }

  if (feedback === 'too high') {
    return <span style={{ color: 'var(--color-secondary)' }}>Too high</span>;
  }

  return <span>{feedback}</span>;
};

export default ResultMessage;
