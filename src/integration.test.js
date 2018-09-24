import { storeFactory } from "../test/utils";
import { guessWord } from "./actions";

describe("guess word action dispatcher", () => {
  const secretWord = "party";
  const badGuess = "train";
  describe("no words guessed prev", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("correct word guessed - updates state correctly", () => {
      store.dispatch(guessWord(badGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{ word: badGuess, matchNo: 3 }]
      };
      expect(newState).toEqual(expectedState);
    });
    test("wrong word guessed - updates state correctly", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{ word: secretWord, matchNo: 5 }]
      };
      expect(newState).toEqual(expectedState);
    });
  });
  describe("words guessed prev", () => {
    const guessedWords = [{ word: 'ample', matchNo: 2 }];
    const initialState = { guessedWords, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("correct word guessed - updates state correctly", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [...guessedWords, { word: secretWord, matchNo: 5 }]
      };
      expect(newState).toEqual(expectedState);
    });
    test("wrong word guessed - updates state correctly", () => {
      store.dispatch(guessWord(badGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [...guessedWords, { word: badGuess, matchNo: 3 }]
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
