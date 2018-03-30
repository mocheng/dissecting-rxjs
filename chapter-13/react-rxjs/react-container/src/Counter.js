import React from 'react';

const CounterView = ({count, onIncrement, onDecrement}) => (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

class Counter extends React.Component {
  state = {count: 0}

  onIncrement() {
    this.setState({count: this.state.count + 1});
  }

  onDecrement() {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <CounterView
        count={this.state.count}
        onIncrement={this.onIncrement.bind(this)}
        onDecrement={this.onDecrement.bind(this)}
        />
    );
  }
}

export default Counter;
