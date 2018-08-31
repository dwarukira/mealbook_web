import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Browser } from "react-router-dom";
import { MealDetails } from "../MealDetails";

describe("The Meal detail Component", () => {
  it("should not regress", () => {
    const meal = {
      id: 1,
      caterer: {
        username: "duncan",
        id: 1,
        email: "dwarukira@gmail.com"
      },
      photo: "http://localhost:5000/uploads/ID_1.JPG",
      _links: {
        self: "http://localhost:5000/api/v2/meal/1",
        collection: "http://localhost:5000/api/v2/meals"
      },
      posted_on: "2018-07-08T12:15:20.738076+00:00",
      name: "Cool",
      price: 10.0
    };

    const tree = renderer.create(
      <Browser>
        <MealDetails meal={meal} />
      </Browser>
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
