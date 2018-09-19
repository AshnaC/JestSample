import React, { Component } from "react";
import { hot } from "react-hot-loader";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.incrementCount = this.incrementCount.bind(this);
    this.decremetCount = this.decremetCount.bind(this);
  }

  incrementCount() {
    this.setState(preState => {
      const state = {};
      if (preState.error) state.error = false;
      state.counter= preState.counter + 1;
      return state;
      
    });
  }

  decremetCount() {
    this.setState(preState => {
      if (preState.counter === 0) {
        return { error: true };
      }
      return { counter: preState.counter - 1 };
    });
  }

  render() {
    return (
      <div className="App" data-test="app">
        <h1 data-test="counter-display"> Count is {this.state.counter}</h1>
        {this.state.error && (
          <h2 data-test="error-display" className="error">
            Cant go below 0
          </h2>
        )}
        <button data-test="increment-button" onClick={this.incrementCount}>
          Increment Counter
        </button>
        <button data-test="decrement-button" onClick={this.decremetCount}>
          Decrement Counter
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
