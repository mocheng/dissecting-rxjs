import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

const promise = Promise.resolve(1);

const source$ = Observable.fromPromise(promise)
  .map(x => x * 2);

source$.subscribe(x => console.log(x));



