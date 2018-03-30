import {Observable} from 'rxjs/Observable';

const onSubscribe = observer => {
  let number = 1;
  const handle = setInterval(() => {
    observer.next(number++);
  }, 1000);

  return {
    unsubscribe: () => {
      clearInterval(handle);
    }
  };
};

const source$ = new Observable(onSubscribe);
const subscription = source$.subscribe(item => console.log(item));

setTimeout(() => {
  subscription.unsubscribe();
}, 3500);

