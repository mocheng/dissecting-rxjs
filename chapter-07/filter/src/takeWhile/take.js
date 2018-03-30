import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/takeWhile';

const source$ = Observable.range(1, 100);
Observable.prototype.take = function (count) {
  return this.takeWhile((value, index) => index < count);
};
const take$ = source$.take(3);

take$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


