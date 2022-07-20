import React, { Component } from "react";
import Resys from "./Resys";
import "./ResyContainer.css";
import Form from "./Form";

class ResyContainer extends Component {
  constructor() {
    super();
    this.state = {
      json: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/reservations")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          json: data,
        });
      });
  };

  addResy = (newResy) => {
    this.setState({
      json: [...this.state.json, newResy],
    });
    console.log(this.state.json);
  };

  render() {
    console.log(this.state.json);
    let allResys = this.state.json.map((resy) => {
      return (
        <Resys
          id={resy.id}
          key={Date.now}
          name={resy.name}
          date={resy.date}
          time={resy.time}
          number={resy.number}
        />
      );
    });
    return (
      <div className="allResys">
        <Form addResy={this.addResy} />
        <div className="resy-cards">{allResys}</div>
      </div>
    );
  }
}

export default ResyContainer;
