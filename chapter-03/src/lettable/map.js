import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/let';

/*
function map(fn) {
  return function(obs$) {
    return new Observable(observer => {
      return obs$.subscribe({
        next: value => observer.next(fn(value)),
        error: err => observer.error(error),
        complete: () => observer.complete(),
      });
    });
  };
}
*/

/*
const map = fn => obs$ => {
  return new Observable(observer => {
    return obs$.subscribe({
      next: value => observer.next(fn(value)),
      error: err => observer.error(error),
      complete: () => observer.complete(),
    });
  });
}
*/

const map = fn => obs$ => new Observable(observer => (
  obs$.subscribe({
    next: value => observer.next(fn(value)),
    error: err => observer.error(error),
    complete: () => observer.complete(),
  })
));


const source$ = Observable.of(1, 2, 3);
const result$ = source$.let(map(x => x * 2));

result$.subscribe(console.log);


