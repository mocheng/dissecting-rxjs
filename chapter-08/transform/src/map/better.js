import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

const source$ = Observable.of(3, 1, 4);
const context = {separator: ':'};
const mapFunc = (function (separator) {
  return function(value, index) {
    return `${value} ${separator} ${index}`;
  };
})(context.separator)
const result$ = source$.map(mapFunc);
result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


