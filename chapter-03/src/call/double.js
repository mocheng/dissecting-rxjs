import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {map} from 'rxjs/operator/map';

Observable.prototype.double = function() {
  return this::map(x => x * 2);
}

const source$ = of(1, 2, 3);
const result$ = source$.double();

result$.subscribe(value => console.log(value));
