import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/partition';

const source$ = Observable.timer(0, 100);
const [even$, odd$] = source$.partition(x => x % 2 === 0);

even$.subscribe(value => console.log('even:', value));
odd$.subscribe(value => console.log('odd:', value));



