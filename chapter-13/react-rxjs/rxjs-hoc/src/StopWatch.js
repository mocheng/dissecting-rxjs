import React from 'react';

import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeInterval';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

import padStart from 'lodash/padStart';

import observe from './observe';

const ms2Time = (milliseconds) => {
  let ms = parseInt(milliseconds % 1000, 10);
  let seconds = parseInt((milliseconds / 1000) % 60, 10);
  let minutes = parseInt((milliseconds / (1000 * 60)) % 60, 10);
  let hours = parseInt(milliseconds / (1000 * 60 * 60), 10);

  return padStart(hours, 2, '0') + ":" + padStart(minutes, 2, '0') + ":" + padStart(seconds, 2, '0') + "." + padStart(ms, 3, '0');
}

const StopWatchView = ({milliseconds, onStart, onStop, onReset}) => {
  return (
    <div>
      <h1>{ms2Time(milliseconds)}</h1>
      <button onClick={onStart}>开始</button>
      <button onClick={onStop}>停止</button>
      <button onClick={onReset}>重设</button>
    </div>
  );
}

const START = 'start';
const STOP  = 'stop';
const RESET = 'reset';

const StopWatch = observe(
  StopWatchView,
  () => {
    const button = new Subject();

    const time$ = button
      .switchMap(value => {
        switch(value) {
          case START: {
            return Observable.interval(10).timeInterval()
              .scan((result, ti) => result + ti.interval, 0)
          }
          case STOP:  return Observable.empty();
          case RESET: return Observable.of(0);
          default: return Observable.throw('Invalid value ', value);
        }
      });

    const stopWatch = new BehaviorSubject(0);

    return stopWatch
      .merge(time$)
      .map(value => ({
        milliseconds: value,
        onStop:  () => button.next(STOP),
        onStart: () => button.next(START),
        onReset: () => button.next(RESET),
      }));
  },
  0
);

export default StopWatch;
