import { actionTypes, correctGuess } from "../actions";
import successReducer from "./successReducer";

test('default to false success when no action passed', () =>{
  const newState = successReducer(undefined, {});
  expect (newState).toBe(false);
});

test('gives success as true whern action dispatched', () =>{
  const newState = successReducer(undefined , correctGuess() );
  expect(newState).toBe(true);
});
