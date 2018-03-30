import React from 'react';

export default class Counter extends React.Component {
  state = {count: 0}

  onIncrement() {
    this.setState({count: this.state.count + 1});
  }

  onDecrement() {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.onIncrement.bind(this)}>+</button>
        <button onClick={this.onDecrement.bind(this)}>-</button>
      </div>
    );
  }
}
