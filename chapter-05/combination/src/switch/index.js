import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/map';

const higherOrder$ = Observable.interval(1000).map(() => Observable.interval(300));
const result$ = higherOrder$.switch();

result$.subscribe(
  console.log,
  err => console.log('Error: ', err),
  () => console.log('complete')
);


