import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/map';

const source$ = Observable.of(3, 1, 4, 1, 5, 9);

Observable.prototype.average = function () {
  return this.reduce(
    (acc, current) => ({sum: acc.sum + current, count: acc.count + 1 }),
    {sum: 0, count: 0}
  ).map(acc => acc.sum / acc.count);
}
const average$ = source$.average();

average$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);




