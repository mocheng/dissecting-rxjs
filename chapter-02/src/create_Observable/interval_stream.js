import {Observable} from 'rxjs/Observable';

const onSubscribe = observer => {
  let number = 1;
  const handle = setInterval(() => {
    observer.next(number++);
    if (number > 3) {
      clearInterval(handle);
    }
  }, 1000);
};

const source$ = new Observable(onSubscribe);

const theObserver = {
  next: item => console.log(item)
}
source$.subscribe(theObserver);

