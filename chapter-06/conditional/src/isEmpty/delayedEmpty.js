import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/isEmpty';

const source$ = Observable.create(observer => {
  setTimeout(() => observer.complete(1), 1000);
});
const isEmpty$ = source$.isEmpty();

isEmpty$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


