import React, { Component } from "react";
import "./App.css";
import ResyContainer from "../components/ResyContainer";
import Form from "../components/Form";

class App extends Component {
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
    this.setState((prevState) => {
      return { ...prevState, json: newResy };
    });
    console.log(this.state.json);
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form addResy={this.addResy} />
        </div>
        <div className="resy-container">
          <ResyContainer json={this.state.json} />
        </div>
      </div>
    );
  }
}

export default App;
