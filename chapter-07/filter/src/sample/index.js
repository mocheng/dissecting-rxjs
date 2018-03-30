import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/sample';

const source$ = Observable.interval(500);
const notifer$ = Observable.interval(1500);
const result$ = source$.sample(notifer$);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


