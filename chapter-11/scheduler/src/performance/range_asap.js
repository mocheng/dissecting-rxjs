import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import {asap} from 'rxjs/scheduler/asap';

const timeStart = new Date();
const source$ = Observable.range(1, 100000, asap);

console.log('before subscribe');
source$.subscribe({
  complete: () => {
    console.log('Time elapsed: ' + (Date.now() - timeStart) + 'ms');
  }
});
console.log('after subscribe');


