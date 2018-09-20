import React from "react";
import { shallow } from "enzyme";

import Congrats from "./congrats";
import { findNodeByAttr, checkProps } from "../../test/utils";

const defaultProps = { success: false };

const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setUp();
  const component = findNodeByAttr(wrapper, "congrats");
  expect(component.length).toBe(1);
});

test("renders no text where success props is false", () => {
  const wrapper = setUp({ success: false });
  const component = findNodeByAttr(wrapper, "congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty text when success props is true", () => {
  const wrapper = setUp({ success: true });
  const component = findNodeByAttr(wrapper, "congrats-message");
  expect(component.text().length).not.toBe(0);
});

test("check for expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
