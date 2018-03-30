require('./helpers/test-helper');
const Rx = require('rxjs');

describe('glitch', () => {

  test('should show glitch for combineLatest', () => {
    const source1$ = cold('--a---b----c----|');
    const source2$ = source1$.map((x, i) => i);
    const expected =      '--A---(XY)-(MN)-|';

    const result$ = Rx.Observable.combineLatest(source1$, source2$, (a, b) => a + '' + b);
    expectObservable(result$).toBe(expected, {
      A: 'a0',
      X: 'b0',
      Y: 'b1',
      M: 'c1',
      N: 'c2',
    });
  });

  test('should show no glitch for withLatestFrom', () => {
    const source1$ = cold('--a---b----c----|');
    const source2$ = source1$.map((x, i) => i);
    const expected =      '--A---X----M----|';

    const result$ = source1$.withLatestFrom(source2$, (a, b) => a + '' + b);
    expectObservable(result$).toBe(expected, {
      A: 'a0',
      X: 'b1',
      M: 'c2',
    });
  });

});

