//run this file after babel. Otherwise the timing might not be correct.
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/bufferTime';

const source$ = Observable.timer(0, 100);
const result$ = source$.bufferTime(400);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


