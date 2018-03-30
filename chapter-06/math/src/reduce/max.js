import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/reduce';

const source$ = Observable.of(3, 1, 4, 1, 5, 9);

const maxReducer = comparer => {
  return (typeof comparer === 'function')
    ? function (x, y) { return comparer(x, y) > 0 ? x : y; }
    : function (x, y) { return x > y ? x : y; };
};
Observable.prototype.max = function (comparer) {
  return this.reduce(maxReducer(comparer));
}
const max$ = source$.max();
max$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


