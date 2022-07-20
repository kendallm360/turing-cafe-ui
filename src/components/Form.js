import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      guests: "",
      isFilled: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    let newResy = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.guests,
    };
    // console.log(newResy);
    this.props.addResy(newResy);
  };

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
        <input
          type="text"
          name="date"
          placeholder="Date (mm/dd)"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <select
          type="text"
          name="time"
          value={this.state.time}
          onChange={this.handleChange}
        >
          <option>--Select a Time</option>
          <option>5:30</option>
          <option>5:45</option>
          <option>6:00</option>
          <option>6:15</option>
          <option>6:30</option>
          <option>6:45</option>
          <option>7:00</option>
          <option>7:15</option>
          <option>7:30</option>
        </select>
        <input
          type="text"
          name="guests"
          placeholder="Number of Guests"
          value={this.state.guests}
          onChange={this.handleChange}
        />
        <button className="reservation" onClick={this.handleSubmit}>
          Make Reservation
        </button>
      </div>
    );
  }
}

export default Form;
