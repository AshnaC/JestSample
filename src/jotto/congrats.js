import React from "react";
import PropTypes from 'prop-types'

const Congrats = (props) => {
  return (
    <div data-test="congrats">
      {props.success && <span data-test="congrats-message">Baby congrats</span>}
    </div>
  );
};

export default Congrats;

Congrats.propTypes ={
  success:PropTypes.bool.isRequired,
}