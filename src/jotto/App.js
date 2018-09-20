import React, { Component } from "react";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import "../styles.css";

import GuessWords from "./GuessWords";
import Congrats from "./Congrats";

export class App extends Component {
  // static propTypes = {};

  render() {
    return (
      <div className="container">
        <Congrats success={true} />
        <GuessWords
          guessedWords={[
            { word: "train", matchNo: 3 },
            { word: "bling", matchNo: 2 },
            { word: "trima", matchNo: 4 }
          ]}
        />
      </div>
    );
  }
}

export default hot(module)(App);
