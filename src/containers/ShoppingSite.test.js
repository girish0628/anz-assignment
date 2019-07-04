import ShoppingSite from "./ShoppingSite";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import React from "react";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

const setUp = () => {
  const wrapper = shallow(
    <Provider store={store}>
      <ShoppingSite />
    </Provider>
  );
  return wrapper;
};

describe("ShoppingSite Component", () => {
  it("Should render without errors", () => {
    setUp();
  });
});
