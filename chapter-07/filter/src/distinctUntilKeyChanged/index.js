import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/distinctUntilKeyChanged';

const source$ = Observable.of(
  {name: 'RxJS', version: 'v4'},
  {name: 'React', version: 'v15'},
  {name: 'React', version: 'v16'},
  {name: 'RxJS', version: 'v5'}
);
const distinct$ = source$.distinctUntilKeyChanged('name');
const distinct$ = source$.distinctUntilKeyChanged('name');

distinct$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


