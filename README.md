# Prime Number Guessing Game

A single-player web game where you try to guess a randomly selected prime number between 1 and 100. Built with Vite, React, and TypeScript.

## Features

- Random prime number generation  
- Feedback for each guess (too low, too high, correct)  
- Guess history display  
- Restart functionality  
- Backend integration for session management and data saving  

## Tech Stack

- Vite  
- React  
- TypeScript  

## Prerequisites

- Node.js (v14 or higher)  
- npm or Yarn  

## Getting Started

1. Clone the repository  
   git clone https://github.com/your-username/prime-guessing-game.git  
2. Navigate into the project directory  
   cd prime-guessing-game  
3. Install dependencies  
   npm install  

## Configuration

Create a `.env` file in the project root with the following variable:  
VITE_GAME_ID=your-game-id

## Development

Start the development server:  
npm run dev

Open your browser at http://localhost:3000

## Production Build

Build the application for production:  
npm run build  

Preview the production build locally:  
npm run preview

## Gameplay Instructions

1. Enter your guess in the input field.  
2. Submit your guess.  
3. Receive feedback indicating whether your guess is too low, too high, or correct.  
4. View your past guesses and feedback in the history panel.  
5. Click "Restart Game" to begin a new session with a different prime.

## API Integration

This game uses the following functions from `src/services/apiService.ts`:

- `initGameSession()` to initialize a game session on load  
- `saveGameData(sessionId, roundNumber, roundData)` to save each round’s data to the backend  

## License

This project is licensed under the MIT License. See the LICENSE file for details.