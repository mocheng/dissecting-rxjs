import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/exhaustMap';

Observable.prototype.exhaustMapTo = function (inner$) {
  return this.exhaustMap(() => inner$);
};

const source$ = Observable.interval(100);
const result$ = source$.exhaustMapTo(Observable.interval(100).take(5));

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


