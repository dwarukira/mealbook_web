import { meals } from "../meals";
import { FETCH_MEALS_SUCCESS } from "../../actions/types";

describe("The Meal Reducer", () => {
  it("Should not modify state for unrecognized action", () => {
    const initalState = {
      loading: false,
      meals: [],
      errors: null
    };
    const initalStateClone = {
      loading: false,
      meals: [],
      errors: null
    };

    const newState = meals(initalState, { type: "UNRECOGNIZED_ACTION" });

    expect(newState).toEqual(initalStateClone);
    expect(newState).toBe(newState);
  });

  it("Should fetch new meals", () => {
    const initalState = {
      loading: false,
      meals: [],
      errors: null
    };

    const new_meals = {
      meals: [
        {
          id: 1,
          posted_on: "2018-07-08T12:15:20.738076+00:00",
          name: "Cool",
          price: 10.0
        }
      ]
    };

    const newState = meals(initalState, {
      type: FETCH_MEALS_SUCCESS,
      payload: { meals: new_meals }
    });
    expect(newState).toMatchObject(new_meals);
  });
});
