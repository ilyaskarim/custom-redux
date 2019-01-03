import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        Hello your name is {this.props.user.name} and you are from {this.props.user.location}
      </div>
    );
  }
}

export default App;
