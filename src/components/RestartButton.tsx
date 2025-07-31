import React, { FC } from 'react';

interface RestartButtonProps {
  onRestart: () => void;
  disabled?: boolean;
}

const RestartButton: FC<RestartButtonProps> = ({ onRestart, disabled = false }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <button
        type="button"
        onClick={onRestart}
        disabled={disabled}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'var(--color-primary)',
          color: '#fff',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Restart Game
      </button>
    </div>
  );
};

export default RestartButton;