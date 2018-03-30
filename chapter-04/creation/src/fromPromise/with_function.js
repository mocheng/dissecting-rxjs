//This doesn't work for RxJS v5 any more
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/repeat';

let i = 0;
const promiseFactory = () => {
  return Promise.resolve(i++);
};

const source$ = Observable.fromPromise(promiseFactory).repeat(3);

source$.subscribe(x => console.log(x));



