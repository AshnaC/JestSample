import checkPropTypes from "check-prop-types";
import { createStore } from "redux";
import rootReducer from "../src/reducers";

export const findNodeByAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propsError).toBeUndefined();
};

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};
