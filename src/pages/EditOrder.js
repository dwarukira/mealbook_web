import React, { Component } from "react";
import { connect } from "react-redux";
import { getMenu } from "../actions";
import { API } from "../api";
import { ORDER_URI_ONE } from "../constants";

class EditOrder extends Component {
  state = {
    meal_id: this.props.match.params.meal_id
  };

  componentWillMount() {
    if (this.props.menu.menu.length === 0) {
      this.props.dispatch(getMenu());
      console.log("Called");
    }
  }

  submit = e => {
    e.preventDefault();
    let service = new API();

    service
      .api(ORDER_URI_ONE + "/" + this.props.match.params.id, {
        body: JSON.stringify({
          previous_meal_id: this.props.match.params.meal_id,
          meal_id: this.state.meal_id
        }),
        method: "PUT"
      })
      .then(data => {
        console.log(data);
        this.props.history.push("/orders");
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    this.setState({ meal_id: e.target.value });
  };
  render() {
    console.log(this.props);
    let meals = null;
    if (this.props.menu.menu.length !== 0) {
      meals = this.props.menu.menu.menu_items.map(meal => (
        <option value={meal.meal.id} key={meal.id}>
          {meal.meal.name}
        </option>
      ));
    }

    return (
      <div>
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label htmlFor="Meal">Meal</label>
            <select
              name="meal"
              id=""
              className="form-control"
              onChange={this.handleChange}
            >
              {meals ? meals : ""}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps)(EditOrder);
