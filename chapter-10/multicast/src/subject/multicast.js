import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

const tick$ = Observable.interval(1000).take(3);
const subject = new Subject();
tick$.subscribe(subject);

subject.subscribe(value => console.log('observer 1: ' + value));
setTimeout(() => {
  subject.subscribe(value => console.log('observer 2: ' + value));
}, 1500);


