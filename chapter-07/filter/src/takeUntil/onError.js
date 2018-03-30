import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/takeUntil';

const source$ = Observable.interval(1000);
const notifier$ = Observable.throw('custom error').delay(500);
const takeUntil$ = source$.takeUntil(notifier$);

takeUntil$.subscribe(
  console.log,
  error => console.log('on error: ', error),
  () => console.log('complete')
);




