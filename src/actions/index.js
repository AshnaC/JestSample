import { getLetterMatchCount } from "../helpers";
export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS:WORD "
};

export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}

export const guessWord = guessWord => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const matchNo = getLetterMatchCount(guessWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {
        word: guessWord,
        matchNo
      }
    });
    if (guessWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS
      });
    }
  };
};
