import {of} from 'rxjs/observable/of';
import {map} from 'rxjs/operators';
//import {map} from 'rxjs/operators/map';

const source$ = of(1, 2, 3);
const result$ = source$.pipe(
  map(x => x * 2)
);

result$.subscribe(console.log);
