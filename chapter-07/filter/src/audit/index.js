import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/audit';

const source$ = Observable.interval(500);
const durationSelector = value => {
  return Observable.timer(800);
};
const result$ = source$.audit(durationSelector);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


