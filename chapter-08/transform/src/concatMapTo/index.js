import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concatMapTo';

const intervalStream$ = Observable.interval(100);
const innerStream$ = Observable.interval(1000).take(3);
//const innerStream$ = Observable.of(1, 2, 3);
const downStream$ = intervalStream$.concatMapTo(
  innerStream$
);

downStream$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


