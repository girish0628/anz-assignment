import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../Utils";
import ProductCard from "./ProductCard";

const setUp = (props = {}) => {
  const component = shallow(<ProductCard {...props} />);
  return component;
};

describe("ProductCard Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const navbar = findByTestAtrr(
      component,
      "productcard"
    );
    expect(navbar.length).toBe(1);
  });
});