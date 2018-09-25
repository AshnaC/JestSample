import axios from "axios";

import { getLetterMatchCount } from "../helpers";
export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS:WORD",
  GET_SECRET_WORD: "GET_SECRET_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD"
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

export const getSecretWord = () => {
  return function(dispatch) {
    return axios.get("http://localhost:3010").then(res => {
      dispatch({ type: actionTypes.SET_SECRET_WORD, payload: res.data });
    });
  };
};
