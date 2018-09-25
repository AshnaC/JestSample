import React, { Component } from "react";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import "../styles.css";
import { connect } from "react-redux";
import GuessWords from "./GuessWords";
import Congrats from "./congrats";
import Input from './input';
import { getSecretWord } from "../actions";

export class App extends Component {
  // static propTypes = {};

  render() {
    return (
      <div className="container">
        <Congrats success={this.props.success} />
        <Input/>
        <GuessWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { guessedWords, success, secretWord } = state;
  return { guessedWords, success, secretWord };
};

export default hot(module)(
  connect(
    mapStateToProps,
    { getSecretWord }
  )(App)
);
