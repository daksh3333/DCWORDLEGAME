import { answer } from '../lib/words'

export const MAX_LENGTH = answer.length //How long the word can be 
export const GUESSES = 6 //How many guesses 
export const ALERT_TIME_MS = 2000 //How long the wrong answer stays up before deleting
export const REVEAL_TIME_MS = 350 //How long it takes to reveal each letterexport const GAME_LOST_INFO_DELAY = (MAX_WORD_LENGTH + 1) * REVEAL_TIME_MS;
export const GAME_LOST_INFO_DELAY = (MAX_LENGTH + 1) * REVEAL_TIME_MS // delay before game over prompt
export const WELCOME_INFO = 350 //How long it takes for the welcome page to show
