require('./helpers/test-helper');

import {searchRepo$} from '../src/search';
import Rx from 'rxjs';

describe('search', () => {
  test('searchRepo$ with customized due time', () => {
    const keyup    = '^-a-b---c-----|';
    const expected = '------x---y---|';
    const mockAPI = {
      'r': 'react',
      'rx': 'rx',
      'rxj': 'rxjs',
    };
    const fetch$ = (query) => {
      return Rx.Observable.of(mockAPI[query]);
    };

    const keyup$ = hot(keyup, {
      a: {target: {value: 'r'}},
      b: {target: {value: 'rx'}},
      c: {target: {value: 'rxj'}},
    });
    const result$ = searchRepo$(keyup$, fetch$, 20, global.rxTestScheduler);

    expectObservable(result$).toBe(expected, {
      x: mockAPI['rx'],
      y: mockAPI['rxj'],
    });
  });

  test('searchRepo$ with delay response', () => {
    const keyup    = '^-a--b------|';
    const expected = '---------x--|';
    const mockAPI = {
      'r': 'react',
      'rx': 'rx',
    };
    const fetch$ = (query) => {
      return Rx.Observable.of(mockAPI[query]).delay(40, global.rxTestScheduler);
    };

    const keyup$ = hot(keyup, {
      a: {target: {value: 'r'}},
      b: {target: {value: 'rx'}},
    });
    const result$ = searchRepo$(keyup$, fetch$, 0, global.rxTestScheduler);

    expectObservable(result$).toBe(expected, {
      x: mockAPI['rx'],
    });
  });

});


