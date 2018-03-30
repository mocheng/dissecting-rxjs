import {Observable} from 'rxjs/Observable';
import EventEmitter from 'events';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/take';

const throwOnUnluckyNumber = value => {
  if (value === 4) {
    throw new Error('unlucky number 4');
  }

  return value;
};

const emitter = new EventEmitter();
Observable.interval(600).subscribe((value) => {
  emitter.emit('tick', value);
});

const hotSource$ = Observable.create(observer => {
  console.log('on subscribe');

  const listener = (value) => observer.next(value);
  emitter.on('tick', listener);

  return () => {
    console.log('on unsubscribe');
    emitter.removeListener('tick', listener);
  }
});

const error$ = hotSource$.map(throwOnUnluckyNumber);
const retry$ = error$.retry(1).take(7);

retry$.subscribe(
  value => console.log('value: ', value),
  err => console.log('error: ', err),
  () => console.log('complete')
);



