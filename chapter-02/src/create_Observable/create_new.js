import {Observable} from 'rxjs/Observable';

const onSubscribe = observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
};

const source$ = new Observable(onSubscribe);

const theObserver = {
  next: item => console.log(item)
}
source$.subscribe(theObserver);

