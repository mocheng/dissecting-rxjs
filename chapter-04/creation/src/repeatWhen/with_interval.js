import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/repeatWhen';

const notifier = () => {
  return Observable.interval(1000);
};

const source$ = Observable.of(1, 2, 3);
const repeated$ = source$.repeatWhen(notifier);

repeated$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);



