//run this file after babel. Otherwise the timing might not be correct.
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/windowToggle';

const source$ = Observable.timer(0, 100);
const openings$ = Observable.timer(0, 400);
const closingSelector = value => {
  console.log('#enter closingSelector');
  return value % 2 === 0 ? Observable.timer(500) : Observable.timer(100);
};
const result$ = source$.windowToggle(openings$, closingSelector);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


