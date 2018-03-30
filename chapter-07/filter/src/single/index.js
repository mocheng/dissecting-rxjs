import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/single';
import 'rxjs/add/operator/take';

const source$ = Observable.interval(1000).take(2);
const result$ = source$.single(x => x % 2 === 0);

result$.subscribe(
  console.log,
  err => console.log('Error: ', err),
  () => console.log('complete')
);


