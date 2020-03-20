import React, { Component } from "react";

import Heading from "./Heading";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
