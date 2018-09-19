import React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Returns ShallowWrapper with given props and statae
 * @function setUp
 * @param {Object} props - component props specific to this set up
 * @param {Object} state - initial state of the set up
 * @returns {shallowWeapper} - Enzyme wrapper
 */
const setUp = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};
/**
 * Returns shallow wrapper containing nodes with particular data-test value
 * @function findNodeByTestAttribute
 * @param {ShallowWrapper} wrapper
 * @param {String} attr
 */
const findNodeByTestAttribute = (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
};

test("renders without error", () => {
  const wrapper = setUp();
  const appComponent = findNodeByTestAttribute(wrapper, "app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setUp();
  const button = findNodeByTestAttribute(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("render counter display", () => {
  const wrapper = setUp();
  const counterDisplay = findNodeByTestAttribute(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setUp();
  const initialState = wrapper.state("counter");
  expect(initialState).toBe(0);
});

test("clicking button increments counter display", () => {
  const counter = 7;
  const wrapper = setUp(null, { counter });
  //find button and click
  const button = findNodeByTestAttribute(wrapper, "increment-button");
  button.simulate("click");
  wrapper.update();
  // find display and check value
  const counterDisplay = findNodeByTestAttribute(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);
});

test("renders decrement button", () => {
  const wrapper = setUp();
  const button = findNodeByTestAttribute(wrapper, "decrement-button");
  expect(button.length).toBe(1);
});

test("clicking decrement substracts counter", () => {
  const counter = 1000;
  const wrapper = setUp(null, { counter });
  const button = findNodeByTestAttribute(wrapper, "decrement-button");
  button.simulate("click");
  wrapper.update();
  const counterDisplay = findNodeByTestAttribute(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter - 1);
});

describe("counter is zero and decremnt clicked", () => {
  const counter = 0;
  const wrapper = setUp(null, { counter });
  beforeEach(() => {
    const decButton = findNodeByTestAttribute(wrapper, "decrement-button");
    decButton.simulate('click');
    wrapper.update();
  });

  test("not go below Zero", () => {
    const counterDisplay = findNodeByTestAttribute(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(counter);
  });

  test("error msg shown", () => {
    const errorComponent = findNodeByTestAttribute(wrapper, "error-display");
    expect(errorComponent.length).toBe(1);
  });
  test("incremt clears zero", ()=>{
    const incButton = findNodeByTestAttribute(wrapper, "increment-button");
    incButton.simulate("click");
    wrapper.update();
    const errorComponent = findNodeByTestAttribute(wrapper, "error-display");
    expect(errorComponent.length).toBe(0);
  })
});
