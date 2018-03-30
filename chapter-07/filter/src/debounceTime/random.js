import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/debounceTime';

const source$ = Observable.interval(500).take(2).mapTo('A')
  .concat(Observable.interval(1000).take(3).mapTo('B'))
  .concat(Observable.interval(500).take(3).mapTo('C'));
const result$ = source$.debounceTime(800);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);



