export type Feedback = 'too low' | 'too high' | 'correct'

export interface Guess {
  guess: number
  feedback: Feedback
}