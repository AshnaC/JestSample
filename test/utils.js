import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/reducers";
import { middleWares } from "../src/reducers/configureStore";

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
  const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState);
};
