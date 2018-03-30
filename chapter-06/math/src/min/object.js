import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/min';

const intialRelease$ = Observable.of(
  {name: 'RxJS', year: 2011},
  {name: 'React', year: 2013},
  {name: 'Redux', year: 2015}
);
const min$ = intialRelease$.min((a, b) => a.year- b.year);

min$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


