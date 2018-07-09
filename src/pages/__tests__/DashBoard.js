import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Browser } from "react-router-dom";
import DashBoard from "../DashBoard";

describe("The DashBoard Component", () => {
  it("should not regress", () => {
    const tree = renderer.create(
      <Browser>
        <DashBoard />
      </Browser>
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
