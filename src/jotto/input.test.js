import React from "react";
import { shallow } from "enzyme";
import { findNodeByAttr, storeFactory } from "../../test/utils";
import Input from "./input";

const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
  return wrapper;
};

describe("render", () => {
  describe("word not guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setUp(initialState);
    });
    test("should render without error", () => {
      const component = findNodeByAttr(wrapper, "input-component");
      expect(component.length).toBe(1);
    });
    test("should render input box", () => {
      const inputBox = findNodeByAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("should render submit button", () => {
      const submitButton = findNodeByAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
});

describe("word guessed", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { success: true };
    wrapper = setUp(initialState);
  });
  test("should render without error", () => {
    const component = findNodeByAttr(wrapper, "input-component");
    expect(component.length).toBe(1);
  });
  test("should not render input box", () => {
    const inputBox = findNodeByAttr(wrapper, "input-box");
    expect(inputBox.length).toBe(0);
  });

  test("should not render submit button", () => {
    const submitButton = findNodeByAttr(wrapper, "submit-button");
    expect(submitButton.length).toBe(0);
  });
});
