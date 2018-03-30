import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

const now = new Date();
const later = new Date(now.getTime() + 1000);
const source$ = Observable.timer(later);

source$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


