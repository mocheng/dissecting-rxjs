import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/bufferTime';

const source$ = Observable.interval(100);
const result$ = source$.bufferTime(400, 200);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


