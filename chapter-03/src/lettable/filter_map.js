import Observable from 'rxjs/Observable';
import {range} from 'rxjs/observable/range';
import {map, filter} from 'rxjs/operators';

const source$ = range(1, 5).pipe(
  filter( x => x % 2 === 0),
  map(x => x * x)
);

source$.subscribe(console.log);
