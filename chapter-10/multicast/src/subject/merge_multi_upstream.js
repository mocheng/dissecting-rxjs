import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/merge';

const tick1$ = Observable.interval(1000).mapTo('a').take(2);
const tick2$ = Observable.interval(1000).mapTo('b').take(2);

const merged$ = Observable.merge(tick1$, tick2$);

merged$.subscribe(value => console.log('observer 1: ' + value));
merged$.subscribe(value => console.log('observer 2: ' + value));


