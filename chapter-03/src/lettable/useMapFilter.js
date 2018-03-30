import {of} from 'rxjs/observable/of';
import {map, filter} from 'rxjs/operators';

const source$ = of(1, 2, 3);

const result$ = source$.pipe(
  filter(x => x % 2 === 0),
  map(x => x * 2)
);

result$.subscribe(console.log);
