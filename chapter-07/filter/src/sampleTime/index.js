import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/sampleTime';

const source$ = Observable.interval(1000);
const result$ = source$.sampleTime(2000);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


