import React from "react";
import { shallow } from "enzyme";
import { findNodeByAttr, checkProps } from "../../test/utils";
import GuessWords from "./GuessWords";

const defaultProps = { guessedWords: [{ word: "train", matchNo: 3 }] };

const setUp = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessWords {...setUpProps} />);
};

test("no warning with expected props", () => {
  checkProps(GuessWords, defaultProps);
});

describe("No words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ guessedWords: [] });
  });
  test("renders wo error", () => {
    const guessWordComponent = findNodeByAttr(wrapper, "guess-words");
    expect(guessWordComponent.length).toBe(1);
  });
  test("renders instruction to guess a word", () => {
    const guessInstruction = findNodeByAttr(wrapper, "guess-instruction");
    expect(guessInstruction.text().length).not.toBe(0);
  });
});

describe("Words guessed are there", () => {
  const guessedWords = [
    { word: "train", matchNo: 3 },
    { word: "bling", matchNo: 2 },
    { word: "trima", matchNo: 4 }
  ];
  let wrapper;

  beforeEach(() => {
    wrapper = setUp({ guessedWords });
  });

  test("renders wo error", () => {
    const guessWordComponent = findNodeByAttr(wrapper, "guess-words");
    expect(guessWordComponent.length).toBe(1);
  });
  test("renders guessed words table", () => {
    const wordListComponent = findNodeByAttr(wrapper, "guess-words-list");
    expect(wordListComponent.length).toBe(1);    
  });
  test("correct number of guessed words", () => {
    const wordLists = findNodeByAttr(wrapper, "word-item");
    expect(wordLists.length).toBe(guessedWords.length);
  });
});
