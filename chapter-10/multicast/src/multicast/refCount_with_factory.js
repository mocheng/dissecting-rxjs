import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/take';

const subjectFactory = () => {
  console.log('enter subjectFactory');
  return new Subject();
}

const coldSource$ = Observable.interval(1000).take(3);
const tick$ = coldSource$.multicast(subjectFactory).refCount();

tick$.subscribe(value => console.log('observer 1: ' + value));
setTimeout(() => {
  tick$.subscribe(value => console.log('observer 2: ' + value));
}, 5000);


