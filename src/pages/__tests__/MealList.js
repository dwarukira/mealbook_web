import React from "react";
import { mapStateToProps, MealList } from "../MealList";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
describe("The MealList Component", () => {
  describe(`mapStateToProps`, () => {
    it(`should map the state to props correctly`, () => {
      const appState = {};
      const componentState = mapStateToProps(appState);
      const sampleMealList = {};
      expect(componentState).toEqual(sampleMealList);
    });
  });

  describe("The MealList ", () => {
    it(`Should not regress`, () => {
      const meals = {
        meals: [
          {
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
          },
          {
            id: 2,
            caterer: {
              username: "duncan",
              id: 1,
              email: "dwarukira@gmail.com"
            },
            photo: "http://localhost:5000/uploads/ID_2.JPG",
            _links: {
              self: "http://localhost:5000/api/v2/meal/2",
              collection: "http://localhost:5000/api/v2/meals"
            },
            posted_on: "2018-07-08T12:15:49.312743+00:00",
            name: "test",
            price: 10.0
          }
        ]
      };
      const dispatch = () => {};
      const tree = renderer.create(
        <Router>
          <MealList meals={meals} dispatch={dispatch} />
        </Router>
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
