import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/observeOn';
import {asap} from 'rxjs/scheduler/asap';

const timeStart = new Date();
const source$ = Observable.range(1, 100000);

console.log('before subscribe');
source$.observeOn(asap).subscribe({
  error: err => {
    console.log('Error', err);
  },
  complete: () => {
    console.log('Time elapsed: ' + (Date.now() - timeStart) + 'ms');
  }
});
console.log('after subscribe');



