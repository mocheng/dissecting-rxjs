import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/auditTime';

const source$ = Observable.interval(1000);
const result$ = source$.auditTime(2000);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


