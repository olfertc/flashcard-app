import { Character } from './character.data'

export const randomizeCharacters = (characters: Character[]) => {
  let shuffled = [...characters];

  for (let i: number = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }

  return shuffled;
}