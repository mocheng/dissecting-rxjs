import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/repeatWhen';
import 'rxjs/add/operator/delay';

const notifier = (notification$) => {
  return notification$.delay(2000);
};

const source$ = Observable.of(1, 2, 3);
const repeated$ = source$.repeatWhen(notifier);

repeated$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);



