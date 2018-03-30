import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/repeatWhen';
import 'rxjs/add/operator/delay';

const notifier = (notification$) => {
  console.log('## enter notifier');

  //return notification$.delay(2000);
  try {
    return Observable.interval(1500);
  } catch(err) {
    console.log(err);
  }
};

//const source$ = Observable.of(1, 2, 3);
const source$ = Observable.create(observer => {
  console.log('on subscribe');
  setTimeout(() => observer.next(1), 1000);
  setTimeout(() => observer.next(2), 2000);
  setTimeout(() => observer.next(3), 3000);
  setTimeout(() => observer.complete(), 4000);

  return {
    unsubscribe: () => {
      console.log('on unsubscribe');
    }
  }
});


const repeated$ = source$.repeatWhen(notifier);

repeated$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);



