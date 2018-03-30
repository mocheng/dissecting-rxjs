import React from 'react';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/scan';

export default class Counter extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {count: 0}

    this.counter = new Subject();
    const observer = value => this.setState({count: value});
    this.counter.scan((result, inc) => result + inc, 0)
      .subscribe(observer);
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.counter.next(1)}>+</button>
        <button onClick={() => this.counter.next(-1)}>-</button>
      </div>
    );
  }
}
