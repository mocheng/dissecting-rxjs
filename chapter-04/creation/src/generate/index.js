import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/generate';

/*
const result = [];
for (let i=2; i<10; i+=2) {
  result.push(i*i);
}

console.log(result);
*/


const stream$ = Observable.generate(
  2,
  value => value < 10,
  value => value + 2,
  value => value * value
);

stream$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


