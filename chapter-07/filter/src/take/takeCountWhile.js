import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

const source$ = Observable.interval(1000);
Observable.prototype.takeCountWhile = function (count, predicate) {
  return this.filter(predicate).take(count);
}

const even$ = source$.takeCountWhile(
  3,
  value => value % 2 === 0
);

even$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


