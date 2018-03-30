import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/catch';

const throwOnUnluckyNumber = value => {
  if (value === 4) {
    throw new Error('unlucky number 4');
  }

  return value;
};

const source$ = Observable.interval(500);
const error$ = source$.map(throwOnUnluckyNumber);
const catch$ = error$.retryWhen(err$ => Observable.interval(1000))
.catch(err => Observable.of(8));

catch$.subscribe(
  value => console.log('value: ', value, new Date().getTime()),
  err => console.log('error: ', err),
  () => console.log('complete')
);



