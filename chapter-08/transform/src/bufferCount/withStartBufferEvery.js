import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/map';

const source$ = Observable.timer(0, 100);
const result$ = source$.bufferCount(4, 2);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


