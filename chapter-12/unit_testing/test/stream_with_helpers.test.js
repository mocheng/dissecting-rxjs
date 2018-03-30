require('./helpers/test-helper');
const Rx = require('rxjs');

describe('Observable', () => {
  test('should parse marble diagrams', () => {
    const source   = '--a--b--|';
    const expected = '--a--b--|';

    const source$ = cold(source);

    expectObservable(source$).toBe(expected);
  });

  test('should work with map operator', () => {
    const source   = '-a-b|';
    const expected = '-a-b|';
    const source$ = cold(source, {a: 1, b: 3});

    expectObservable(source$.map(x => x * 2)).toBe(expected, {
      a: 2, b: 6
    });
  });

  test('flatMap with range Observable', () => {
    const source =   '-a----b----|';
    const expected = '-(ij)-(kl)-|';

    const source$ = cold(source, {a: 1, b: 100});

    expectObservable(source$.flatMap(x => Rx.Observable.range(x, 2))).toBe(
      expected,
      {
        i: 1,
        j: 2,
        k: 100,
        l: 101
      }
    );
  });

  test('delay complete as well as value', () => {
    const source =         '-a----b-|';
    const delayTime =  time('--|'); // or just hard code 20
    const expected =       '---a----b-|';

    const source$ = cold(source);
    const result$ = source$.delay(delayTime, global.rxTestScheduler);

    expectObservable(result$).toBe(expected);
  });

  test('flatMap with delay Observable', () => {
    const source =         '-a----b----|';
    const delayTime =  time('--|'); // or just hard code 20
    const expected =       '---a----b--|';

    const source$ = cold(source);
    const result$ = source$.flatMap(x => {
      // need second argument to specify TestScheduler instance.
      return Rx.Observable.of(x).delay(delayTime, global.rxTestScheduler)
    })
    expectObservable(result$).toBe(expected);
  });

  test('switchMap with delayed Observable', () => {
    const source =        '-a-b----|';
    const delayTime = time('---|'); // or just hard code 20
    const expected =      '------b-|';

    const source$ = cold(source);
    const result$ = source$.switchMap(
      x  => Rx.Observable.of(x).delay(delayTime, global.rxTestScheduler)
    );
    expectObservable(result$).toBe(expected);
  });

  test('switchMap emit at least one event on completion', () => {
    const source =        '-a-b--|';
    const delayTime = time('----|'); // or just hard code 20
    const expected =      '-------(b|)'; // emit last event and completion at the same time

    const source$ = cold(source);
    const result$ = source$.switchMap(
      x  => Rx.Observable.of(x).delay(delayTime, global.rxTestScheduler)
    );
    expectObservable(result$).toBe(expected);
  });
});




