import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Congrats from "./congrats";
import { findNodeByAttr } from "../../test/utils";

const setUp = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = setUp();
  const component = findNodeByAttr(wrapper,'congrats');
  expect(component.length).toBe(1);
});

test("renders no text where success props is false", () => {
  const wrapper =  setUp({success: false});
  const component = findNodeByAttr(wrapper,'congrats');
  expect(component.text()).toBe('');
});

test("renders non-empty text when success props is true", () => {
  const wrapper =  setUp({success: true});
  const component = findNodeByAttr(wrapper,'congrats-message');
  expect(component.text().length).not.toBe(0);
});
