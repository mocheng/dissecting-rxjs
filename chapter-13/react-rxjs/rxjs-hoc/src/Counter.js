import React from 'react';
//
//import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/scan';

import observe from './observe';

const CounterView = ({count, onIncrement, onDecrement}) => (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const Counter = observe(
  CounterView,
  () => {
    const counter = new BehaviorSubject(0);

    return counter.scan((result, inc) => result + inc, 0)
      .map(value => ({
        count: value,
        onIncrement: () => counter.next(1),
        onDecrement: () => counter.next(-1),
      }));
  },
  0
);

export default Counter;
