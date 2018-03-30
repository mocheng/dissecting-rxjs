import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/throttle';

const source$ = Observable.interval(1000);
const durationSelector = value => {
  console.log(`# call durationSelector with ${value}`);
  return Observable.timer(2000);
};
const result$ = source$.throttle(durationSelector);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


