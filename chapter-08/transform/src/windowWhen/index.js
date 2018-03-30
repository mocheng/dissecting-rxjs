//run this file after babel. Otherwise the timing might not be correct.
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/windowWhen';

const source$ = Observable.timer(0, 100);
const closingSelector = () => {
  return Observable.timer(400);
};
const result$ = source$.windowWhen(closingSelector);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


