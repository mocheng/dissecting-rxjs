import React from 'react';

import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/scan';

const CounterView = ({count, onIncrement, onDecrement}) => (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

class RxCounter extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {count: 0};

    this.counter = new Subject();
    const observer = value => this.setState({count: value});
    this.counter.scan((result, inc) => result + inc, 0)
      .subscribe(observer);
  }

  render() {
    return <CounterView
      count={this.state.count}
      onIncrement={()=> this.counter.next(1)}
      onDecrement={()=> this.counter.next(-1)}
    />
  }
}

export default RxCounter;
