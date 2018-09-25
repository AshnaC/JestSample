import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "../actions";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.inputBox = React.createRef();
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(e) {
    e.preventDefault();
    const guessWord = this.inputBox.current.value;
    if (guessWord) {
      this.props.guessWord(guessWord);
    }
  }

  render() {
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          ref={this.inputBox}
        />
        <button
          data-test="submit-button"
          type="submit"
          onClick={this.submitGuessedWord}
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="input-component">{content}</div>;
  }
}

const mapStateToProps = success => {
  return success;
};

export default connect(
  mapStateToProps,
  { guessWord }
)(UnconnectedInput);
