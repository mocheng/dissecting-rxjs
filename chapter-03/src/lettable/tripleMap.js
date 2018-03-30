//import {Observable} from 'rxjs/Observable';
import {range} from 'rxjs/observable/range';

const tripleMap = fn => source$ =>
  new Observable(observer => {
    return source$.subscribe({
      next: x => {
        const result = fn(fn(fn(x)));
        observer.next(result);
      },
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
  });

const source$ = range(1, 5).pipe(
  tripleMap(x => x * x)
);

source$.subscribe({
  next: console.log,
  complete: () => console.log('done')
});
