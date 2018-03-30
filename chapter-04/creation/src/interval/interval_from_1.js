import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

const source$ = Observable.interval(1000);
const result$ = source$.map(x => x + 1);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


