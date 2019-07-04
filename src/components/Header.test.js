import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../Utils";
import Header from "./Header";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const navbar = findByTestAtrr(
      component,
      "header"
    );
    expect(navbar.length).toBe(1);
  });
});