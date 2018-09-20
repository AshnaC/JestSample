import checkPropTypes from "check-prop-types";

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
