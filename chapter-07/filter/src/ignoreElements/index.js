import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/take';

const source$ = Observable.interval(1000).take(5);
const result$ = source$.ignoreElements();

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


