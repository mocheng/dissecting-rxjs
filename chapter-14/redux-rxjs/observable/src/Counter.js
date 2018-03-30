import React from 'react';
import {connect} from 'react-redux';

import * as Actions from './Actions.js';

const CounterView = ({count, onIncrement, onDecrement}) => (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

function mapStateToProps(state, ownProps) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => dispatch(Actions.increment()),
    onDecrement: () => dispatch(Actions.decrement()),
  }
}

const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterView);
export default Counter;


