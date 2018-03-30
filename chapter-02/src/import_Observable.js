import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const source$ = Observable.create((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
});

source$.subscribe(console.log);

