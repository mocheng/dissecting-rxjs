import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';

const source$ = Observable.interval(200).take(2);
const result$ = source$.mergeMap(
  (value, index) => {
    console.log('#enter func');
    return Observable.interval(100).take(5);
  }
);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


