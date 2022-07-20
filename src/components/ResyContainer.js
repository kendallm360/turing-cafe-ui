import React, { Component } from "react";
import Resys from "./Resys";
import "./ResyContainer.css";
import Form from "./Form";

class ResyContainer extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       api: this.props.json,
  //     };
  //   }

  //   componentDidMount = () => {
  //     fetch("http://localhost:3001/api/v1/reservations")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         this.setState({
  //           json: data,
  //           newRes: {},
  //         });
  //       });
  //   };

  // addResy = (newResy) => {
  //     this.setState((prevState) => {
  //         return [...prevState, newRes: newResy]
  //     })
  // };

  render() {
    console.log(this.props.json);
    let allResys = this.props.json.map((resy) => {
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
    return <div className="allResys">{allResys}</div>;
  }
}

export default ResyContainer;
