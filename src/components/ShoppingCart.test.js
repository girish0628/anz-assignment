import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../Utils";
import ShoppingCart from "./ShoppingCart";

const setUp = (props = {}) => {
  const component = shallow(<ShoppingCart {...props} />);
  return component;
};

describe("ShoppingCart Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const navbar = findByTestAtrr(
      component,
      "shoppingcart"
    );
    expect(navbar.length).toBe(1);
  });
});