import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input data-test="input-box" className="mb-2 mx-sm-3" />
        <button data-test="submit-button" type="submit">
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

export default connect(mapStateToProps)(Input);
