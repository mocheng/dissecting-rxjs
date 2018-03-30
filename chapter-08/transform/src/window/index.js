import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/window';

const source$ = Observable.timer(0, 100);
const notifer$ = Observable.timer(400, 400);
const result$ = source$.window(notifer$);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


