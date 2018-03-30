import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeScan';

const source$ = Observable.interval(100);
const result$ = source$.mergeScan((accumulation, value) => {
  return Observable.of(accumulation + value);
},
0); // must have seed argument

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


