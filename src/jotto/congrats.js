import React from "react";

export default props => {
  return (
    <div data-test="congrats">
      {props.success && <span data-test="congrats-message">Baby congrats</span>}
    </div>
  );
};
