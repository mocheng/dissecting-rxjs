import React from 'react';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

export default class Counter extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {count: 0};

    this.counter = new Subject();
    const observer = value => this.setState({count: value});

    this.counter.merge(
        this.counter.delay(500).map(x => x * 0.1)
      ).scan((result, inc) => result + inc, 0)
      .subscribe(observer);

  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.counter.next(1)}>+</button>
        <button onClick={() => this.counter.next(-1)}>-</button>
      </div>
    );
  }
}
