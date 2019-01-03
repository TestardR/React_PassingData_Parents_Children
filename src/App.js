import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    const name = 'Counter Display';
    return (
      <div className="App">
        <Counter name={name} />
      </div>
    );
  }
}

export default App;
