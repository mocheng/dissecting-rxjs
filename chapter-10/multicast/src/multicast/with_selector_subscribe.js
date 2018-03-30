import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/take';

const coldSource$ = Observable.create((observer) => {
  console.log('enter subscribe');
  Observable.interval(1000).take(2).subscribe(observer);
});
const selector = shared => {
  console.log('enter selector');
  return shared.concat(Observable.of('done'));
}
const tick$ = coldSource$.multicast(new Subject(), selector);

tick$.subscribe(value => console.log('observer 1: ' + value));
tick$.subscribe(value => console.log('observer 2: ' + value));

/*
setTimeout(() => {
  tick$.subscribe(value => console.log('observer 3: ' + value));
}, 6000);
*/


