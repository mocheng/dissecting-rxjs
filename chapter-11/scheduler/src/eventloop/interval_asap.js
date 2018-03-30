import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

console.log('before schedule');

const source$ = Observable.interval(1000, asap);
source$.subscribe(console.log);

console.log('after schedule');



