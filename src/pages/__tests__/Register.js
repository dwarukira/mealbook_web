import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Browser } from "react-router-dom";
import { Register } from "../Register";

describe(`The Register Compenent`, () => {
  it(`Should render`, () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Browser>
        <Register />
      </Browser>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
