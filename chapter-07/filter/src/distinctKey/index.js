import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/distinctKey';


// distinctKey is removed since v5.0.0
const source$ = Observable.interval(100).mapTo(2);
const distinct$ = source$.distinctKey();

distinct$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


