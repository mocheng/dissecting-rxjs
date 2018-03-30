import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/subscribeOn';

const source$ = Observable.create(observer => {
  console.log('on subscribe');
  observer.next(1);
  observer.next(2);
  observer.next(3);

  return () => {
    console.log('on unsubscribe');
  }
});

console.log('before subscribe');
source$.subscribe(
  value => console.log('data: ', value),
  error => console.log('error: ', error),
  () => console.log('complete')
);
console.log('after subscribe');



