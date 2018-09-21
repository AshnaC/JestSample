import { correctGuess } from "./";
import { actionTypes } from "../actions";

describe("correctGuess", () => {
  test("returns an action with 'CORRECT_GUESS'", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
