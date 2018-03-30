import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/map';

const source$ = Observable.timer(0, 100);
const notifer$ = Observable.timer(400, 400);
const result$ = source$.buffer(notifer$);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


