import React, { Component } from "react";

import "./App.css";

import View from "./components/View";
import LoginForm from './components/LoginForm'

import cities from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = { viewMode: false, city: '' };
  }

  onSubmit() {
    this.setState({
      ...this.state,
      viewMode: true,
    });
  }

  onBack() {
    this.setState({
      ...this.state,
      viewMode: false,
    });
  }

  onCityChange(city) {
    this.setState({
      ...this.state,
      city,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.viewMode ? (
          View(this.onBack.bind(this), cities[this.state.city])
        ) : (
          <LoginForm
            cities={Object.entries(cities).map(([value, { name }]) => ({
              value,
              name
            }))}
            city={this.state.city}
            onSubmit={this.onSubmit.bind(this)}
            onCityChange={this.onCityChange.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default App;
