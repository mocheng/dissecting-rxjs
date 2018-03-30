import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';

function map(project) {
  return new Observable(observer => {
    const sub = this.subscribe({
      next: value => {
        try {
          observer.next(project(value));
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

const source$ = Observable.interval(100);

//const result$ = map.bind(source$)(x => x * 2);
//const result$ = map.bind(map.bind(source$)(x => x * 2))(x => x + 1);
//const result$ = map.call(source$, x => x * 2);
//const result$ = source$::map(x => x * 2);
//const result$ = source$::map(x => x * 2)::map(x => x + 1);
const result$ = source$::map(x => x * 2).filter(x => x % 3 !== 0);

const sub = result$.subscribe(
  console.log,
  error => console.log('catch', error),
  () => console.log('complete')
);

setTimeout(() => {
  sub.unsubscribe();
}, 500);


