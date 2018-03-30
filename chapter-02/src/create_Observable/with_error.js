import {Observable} from 'rxjs/Observable';

const onSubscribe = observer => {
  observer.next(1);
  observer.error('Someting Wrong');
  observer.complete();
};

const source$ = new Observable(onSubscribe);

const theObserver = {
  next: item => console.log(item),
  error: err => console.log(err),
  complete: () => console.log('No More Data'),
}
source$.subscribe(theObserver);

