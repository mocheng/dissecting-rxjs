import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/debounceTime';

const source$ = Observable.interval(1000);
const result$ = source$.debounceTime(2000);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


