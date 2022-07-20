import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: null,
      guests: null,
      isFilled: false,
    };
  }
  render() {
    return (
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Form;
