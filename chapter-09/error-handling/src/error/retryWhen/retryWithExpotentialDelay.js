import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/catch';

Observable.prototype.retryWithExpotentialDelay = function (maxRetry, initialDelay) {
  return this.retryWhen(
    err$ => {
      return err$.scan((errorCount, err) => {
        if (errorCount >= maxRetry) {
          throw err;
        }
        return errorCount + 1;
      }, 0)
      .delayWhen(errorCount => {
        const delayTime = Math.pow(2, errorCount - 1) * initialDelay;
        console.log('#delayTime: ', delayTime);
        return Observable.timer(delayTime);
      });
    });
};

const source$ = Observable.range(1, 10);
const catch$ = source$.map(
  value => {
    if (value === 4) {
      throw new Error('unlucky number 4');
    }

    return value;
  }
).retryWithExpotentialDelay(3, 100)
.catch(err => Observable.of('four'));

catch$.subscribe(
  value => console.log('value: ', value),
  err => console.log('error: ', err),
  () => console.log('complete')
);



