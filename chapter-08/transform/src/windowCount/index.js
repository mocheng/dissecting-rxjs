//run this file after babel. Otherwise the timing might not be correct.
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/windowCount';

const source$ = Observable.timer(0, 100);
const result$ = source$.windowCount(4);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


