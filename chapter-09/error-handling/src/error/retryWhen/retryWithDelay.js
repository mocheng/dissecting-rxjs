import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
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

Observable.prototype.retryWithDelay = function(maxCount, delayMilliseconds) {
  return this.retryWhen(err$ => {
    return err$.scan((errorCount, err) => {
      if (errorCount >= maxCount) {
        throw err;
      }
      return errorCount + 1;
    }, 0).delay(delayMilliseconds);
  });
};

const source$ = Observable.range(1, 10);
const error$ = source$.map(throwOnUnluckyNumber);
const retry$ = error$.retryWithDelay(2, 1000);

retry$.subscribe(
  value => console.log('value: ', value),
  err => console.log('error: ', err),
  () => console.log('complete')
);



