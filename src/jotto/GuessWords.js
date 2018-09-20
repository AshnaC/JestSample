import React from "react";
import PropTypes from "prop-types";

const GuessWords = props => {
  let content;
  if (props.guessedWords.length === 0) {
    content = <span data-test="guess-instruction"> Guess some words </span>;
  }
  return <div data-test="guess-words">{content}</div>;
};

GuessWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      matchNo: PropTypes.number.isRequired
    })
  )
};

export default GuessWords;
