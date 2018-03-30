import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';

const source$ = Observable.of(
  {name: 'RxJS', version: 'v4'},
  {name: 'React', version: 'v15'},
  {name: 'React', version: 'v16'},
  {name: 'RxJS', version: 'v5'}
);
const compare = (a, b) => a.name === b.name;
const distinct$ = source$.distinctUntilChanged(compare);

distinct$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


