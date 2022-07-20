import React, { Component } from "react";
import "./App.css";
import ResyContainer from "../components/ResyContainer";
import Form from "../components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-container">
          <ResyContainer />
        </div>
      </div>
    );
  }
}

export default App;
