import {Observable} from 'rxjs/Observable';

const source$ = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
});

source$.subscribe(console.log);

