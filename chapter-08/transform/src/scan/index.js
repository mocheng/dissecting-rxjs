import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/scan';

const source$ = Observable.interval(100);
const result$ = source$.scan((accumulation, value) => {
  return accumulation + value;
});

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


