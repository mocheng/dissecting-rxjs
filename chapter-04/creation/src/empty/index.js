import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

const sourceStream$ = Observable.empty();

sourceStream$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


