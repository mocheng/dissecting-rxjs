import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

Observable.prototype.mapTo = function (value) {
  return this.map(x => value);
};

const source$ = Observable.of(3, 1, 4);
const result$ = source$.mapTo('A');
result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);



