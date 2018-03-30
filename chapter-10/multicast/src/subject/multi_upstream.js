import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mapTo';

const tick1$ = Observable.interval(1000).mapTo('a').take(2);
const tick2$ = Observable.interval(1000).mapTo('b').take(2);
const subject = new Subject();

tick1$.subscribe(subject);
tick2$.subscribe(subject);

subject.subscribe(value => console.log('observer 1: ' + value));
subject.subscribe(value => console.log('observer 2: ' + value));


