import {Observable} from 'rxjs/Observable';
import 'rxjs';

const onSubscribe = observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
};

const source$ = new Observable(onSubscribe);

const theObserver = {
  next: item => console.log(item),
  complete: () => console.log('No More Data')
}
source$.subscribe(theObserver);

