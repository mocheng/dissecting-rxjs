import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/takeUntil';

const source$ = Observable.interval(1000);
const notifier$ = Observable.timer(3000);
const takeUntil$ = source$.takeUntil(notifier$);

takeUntil$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);




