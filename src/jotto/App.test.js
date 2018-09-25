import React from "react";
import ReactDOM from "react-dom";
import App, { UnconnectedApp } from "./App";

import { shallow } from "enzyme";
import { storeFactory } from "../../test/utils";

const setUp = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
};

describe("has redux props", () => {
  test("should have guessed Word", () => {
    const guessedWords = [{ word: "train", matchNo: 3 }];
    const wrapper = setUp({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test("should have success props", () => {
    const success = true;
    const wrapper = setUp({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("should have secret word props", () => {
    const secretWord = "party";
    const wrapper = setUp({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test("get secret word props", () => {
    const wrapper = setUp();
    const getSecretWordProps = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProps).toBeInstanceOf(Function);
  });
});

test("getSecret word called in app mount ", () => {
  const getSecretWordMock = jest.fn();
  const props = { success: false, getSecretWord: getSecretWordMock };
  const wrapper = shallow(<UnconnectedApp {...props} />);
  wrapper.instance().componentDidMount();
  const getCallCount = getSecretWordMock.mock.calls.length;
  expect(getCallCount).toBe(1);
});
