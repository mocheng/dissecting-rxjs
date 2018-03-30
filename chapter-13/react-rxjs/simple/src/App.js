import React, { Component } from 'react';
import Counter from './Counter';
//import CountButton from './CountButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        {/*
        <br/>
        <br/>
        <CountButton greeting="Hello" />
        */}
      </div>
    );
  }
}

export default App;
