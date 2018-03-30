import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/distinctUntilChanged';

const source$ = Observable.of(0, 1, 1, 2, 0, 0, 1, 3, 3);
const distinct$ = source$.distinctUntilChanged();

distinct$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


