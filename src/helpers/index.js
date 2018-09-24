export function getLetterMatchCount( guessedWord , secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedWordSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedWordSet.has(letter)).length;
}