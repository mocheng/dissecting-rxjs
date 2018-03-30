import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/pairwise';

const source$ = Observable.timer(0, 100);
const result$ = source$.pairwise();

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


