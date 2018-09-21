import React from "react";
import { shallow } from "enzyme";
import { findNodeByAttr, storeFactory } from "../../test/utils";
import Input from "./input";

const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
};


describe("render", () => {
  describe("word not guessed", () => {
    test("should render without error", () => {});
    test("should render input box", () => {});

    test("should render submit button", () => {});
  });
});

describe("", () => {
  test("should render without error", () => {});
  test("should render input box", () => {});

  test("should render submit button", () => {});
});
