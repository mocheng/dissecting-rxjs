import React, { Component } from 'react';
import Counter from './Counter';
import StopWatch from './StopWatch';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <StopWatch />
      </div>
    );
  }
}

export default App;
