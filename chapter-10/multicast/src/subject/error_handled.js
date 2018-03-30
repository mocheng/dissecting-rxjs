import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

const throwOnUnluckyNumber = value => {
  if (value === 4) {
    throw new Error('unlucky number 4');
  }

  return value;
};

const tick$ = Observable.interval(1000).take(10);
const subject = new Subject();

tick$.subscribe(subject);

subject.map(throwOnUnluckyNumber).subscribe(
  value => console.log('observer 1: ' + value),
  err => console.log('observer 1 on error: ', err.message)
);
subject.subscribe(
  value => console.log('observer 2: ' + value),
  err => console.log('observer 2 on error: ', err.message)
);



