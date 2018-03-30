import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/elementAt';

const source$ = Observable.of(3, 1, 2);
const result$ = source$.elementAt(3, null);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


