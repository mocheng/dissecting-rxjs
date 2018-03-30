import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

function map(fn) {
  return new Observable(observer => {
    const sub = this.subscribe({
      next: value => {
        try {
          observer.next(fn(value));
        } catch (err) {
          observer.error(err);
        }
      },
      error: err => observer.error(error),
      complete: () => observer.complete(),
    });

    return {
      unsubscribe: () => {
        sub.unsubscribe();
      }
    };
  });
}

Observable.prototype.map = map;

const source$ = Observable.interval(100);
const result$ = source$.map(x => x.foo.bar);

const sub = result$.subscribe(
  console.log,
  error => console.log('catch', error),
  () => console.log('complete')
);

setTimeout(() => {
  sub.unsubscribe();
}, 500);


