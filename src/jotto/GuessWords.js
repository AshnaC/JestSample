import React from "react";
import PropTypes from "prop-types";

const GuessWords = props => {
  let content;
  if (props.guessedWords.length === 0) {
    content = <span data-test="guess-instruction"> Guess some words </span>;
  } else {
    content = (
      <table data-test="guess-words-list" className="table table-sm">
        <tbody>
          <tr>
            <th>Word</th>
            <th>Number</th>
          </tr>
          {props.guessedWords.map((item, i) => {
            return (
              <tr data-test="word-item" key={i}>
                <td>{item.word} </td>
                <td>{item.matchNo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
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
