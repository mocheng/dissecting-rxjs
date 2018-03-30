const Rx = require('rxjs');
const chai = require('chai');
const assert = chai.assert;

describe('Stupid Naive Observable', () => {
  it('interval and take should work', () => {
    const source$ = Rx.Observable.interval(100).take(4);

    const result = [];
    source$.subscribe({
      next: value => result.push(value),
      complete: () => {
        assert.deepEqual([0, 1, 2, 3], result);
      }
    });

    return source$.toPromise();
  });

  it('interval and take should work', (done) => {
    const source$ = Rx.Observable.interval(100).take(4);

    const result = [];
    source$.subscribe({
      next: value => result.push(value),
      complete: () => {
        assert.deepEqual([0, 1, 2, 3], result);
        done();
      }
    });
  });

});
