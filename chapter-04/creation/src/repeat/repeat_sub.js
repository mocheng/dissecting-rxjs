import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/repeat';

const source$ = Observable.create(observer => {
  console.log('on subscribe');
  setTimeout(() => observer.next(1), 1000);
  setTimeout(() => observer.next(2), 2000);
  setTimeout(() => observer.next(3), 3000);
  setTimeout(() => observer.complete(), 4000);

  return {
    unsubscribe: () => {
      console.log('on unsubscribe');
    }
  }
});
const repeated$ = source$.repeat(2);

//setInterval(() => console.log(), 50000);

repeated$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);



