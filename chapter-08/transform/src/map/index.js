import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

const source$ = Observable.of(3, 1, 4);
const mapFunc = function(value, index) { // this should not be big arrow function
  return `${value} ${this.separator} ${index}`;
};
const context = {separator: ':'};
const result$ = source$.map(mapFunc, context);
result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


