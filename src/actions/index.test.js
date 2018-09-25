// import { correctGuess } from "./";
// import { actionTypes } from "../actions";

// describe("correctGuess", () => {
//   test("returns an action with 'CORRECT_GUESS'", () => {
//     const action = correctGuess();
//     expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
//   });
// });

import moxios from "moxios";
import { storeFactory } from "../../test/utils";
import { getSecretWord } from "./";

describe("get secret word action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("add response word to state", () => {
    const secretWord = "party";
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });
    return store
      .dispatch(getSecretWord())
      .then(result => {
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
      })
  });
});
