import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/do';

const source$ = Observable.range(1, 10);

const observer = {
  next: value => console.log('on data ', value)
};

source$.do(
  value => console.log('source$ data = ', value)
).subscribe(observer);
