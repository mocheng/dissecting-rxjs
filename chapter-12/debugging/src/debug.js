import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

global.debug = true;

Observable.prototype.debug = function(fn) {
  if (global.debug) {
    return this.do(fn);
  } else {
    return this;
  }
};

const source$ = Observable.range(1, 10)
  .filter(x => x % 2 === 0)
  .debug(x => console.log('source$ after filter data = ', x))
  .map(x => x*x);

const observer = {
  next: value => console.log('on data ', value)
};

source$.subscribe(observer);
