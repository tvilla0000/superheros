import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./API/api";

class App extends Component {
  state = {
    supes: []
  };

  async componentDidMount() {
    let supes = API.get(`/id/1`);
    this.setState({
      supes: supes
    });
  }

  render() {
    return <div></div>;
  }
}

export default App;
