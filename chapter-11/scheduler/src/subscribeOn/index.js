import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/subscribeOn';
import {asap} from 'rxjs/scheduler/asap';

const source$ = Observable.create(observer => {
  console.log('on subscribe');
  observer.next(1);
  observer.next(2);
  observer.next(3);

  return () => {
    console.log('on unsubscribe');
  }
});

const tweaked$ = source$.subscribeOn(asap);

console.log('before subscribe');
tweaked$.subscribe(
  value => console.log('data: ', value),
  error => console.log('error: ', error),
  () => console.log('complete')
);
console.log('after subscribe');



