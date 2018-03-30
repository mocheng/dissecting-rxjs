import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

const source$ = Observable.range(1, 10)
  .filter(x => x % 2 === 0)
  .do(x => console.log('source$ after filter data = ', x))
  .map(x => x*x);

const observer = {
  next: value => console.log('on data ', value)
};

source$.do(
  value => console.log('source$ data = ', value)
).subscribe(observer);
