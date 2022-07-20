import React, { Component } from "react";
import Resys from "./Resys";
import "./ResyContainer.css";

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
    return <div className="resy-container">{allResys}</div>;
  }
}

export default ResyContainer;
