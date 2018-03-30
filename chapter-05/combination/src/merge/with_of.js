import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';

const source1 = Observable.of(1, 2, 3);
const source2 = Observable.of(4, 5, 6);
const merged$= Observable.merge(source1, source2);

merged$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


