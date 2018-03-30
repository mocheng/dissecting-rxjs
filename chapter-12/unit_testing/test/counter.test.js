require('./helpers/test-helper');

import {counterPipe} from '../src/counter';

describe('Counter', () => {
  test('should add & subtract count on source', () => {
    const plus     = '^-a------|';
    const minus    = '^---c--d--|';
    const expected = '--x-y--z--|';

    const result$ = counterPipe(hot(plus), hot(minus));

    expectObservable(result$).toBe(expected, {
      x: 1,
      y: 0,
      z: -1,
    });
  });
});
