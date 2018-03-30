import Rx, {TestScheduler} from 'rxjs';
import {assert} from 'chai';

let scheduler;

import {sum} from '../src/sum.js';

describe('Observable', () => {
  beforeEach(() => {
    scheduler = new TestScheduler(assert.deepEqual.bind(assert));
  });

  it('should parse marble diagrams', () => {
    const source   = '--a--b--|';
    const expected = '--a--b--|';

    const source$ = scheduler.createColdObservable(source);

    scheduler.expectObservable(source$).toBe(expected);
    scheduler.flush();
  });

  it('should work with map operator', () => {
    const source   = '-a-b|';
    const expected = '-a-b|';

    const source$ = scheduler.createColdObservable(source, {a: 1, b: 3});

    scheduler.expectObservable(source$.map(x => x * 2)).toBe(expected, {
      a: 2, b: 6
    });
    scheduler.flush();
  });

  it('should work with map operator on string', () => {
    const source   = '-1-3|';
    const expected = '-2-6|';

    const source$ = scheduler.createColdObservable(source);

    scheduler.expectObservable(source$.map(x => (x * 2).toString())).toBe(expected);
    //scheduler.expectObservable(source$.map(x => x * 2)).toBe(expected);
    scheduler.flush();
  });

  it('should work with hot Observable', () => {
    //The ^ characters of hot observables should always be aligned.
    const source1   = '-a-^b----|';
    const source2   = '---^---c-|';

    const expected  =    '-b--c-|';

    const source1$ = scheduler.createHotObservable(source1);
    const source2$ = scheduler.createHotObservable(source2);

    scheduler.expectObservable(source1$.merge(source2$)).toBe(expected);
    scheduler.flush();
  });

  it('should work with both hot and cold Observable', () => {
    const source1   = '-a-^b----|';
    const source2   =    '----c-|';
    const expected  =    '-b--c-|';

    const source1$ = scheduler.createHotObservable(source1);
    const source2$ = scheduler.createColdObservable(source2);

    scheduler.expectObservable(source1$.merge(source2$)).toBe(expected);
    scheduler.flush();
  });

  it('should work with merge operator', () => {
    const source1 =  '-a----b---|';
    const source2 =  '-c----d---|';

    // ( and ) takes each frame as well, just to make marble line consistent.
    const expected = '-(ac)-(bd)|';

    const source1$ = scheduler.createColdObservable(source1);
    const source2$ = scheduler.createColdObservable(source2);
    const mergedSource$ = Rx.Observable.merge(source1$, source2$);

    scheduler.expectObservable(mergedSource$).toBe(expected);

    scheduler.flush();
  });

  it('create virtual time', () => {
    let time = scheduler.createTime('-----|');
    assert.equal(50, time);
  });

  it('tweak frameTimeFactor', () => {
    const originalTimeFactor = TestScheduler.frameTimeFactor;
    TestScheduler.frameTimeFactor = 1;

    let time = scheduler.createTime('-----|');
    assert.equal(5, time);

    TestScheduler.frameTimeFactor = originalTimeFactor;
  });


  it('empty stream', () => {
    const source$ = Rx.Observable.empty();
    const expected = '|';

    scheduler.expectObservable(source$).toBe(expected);
    scheduler.flush();
  });

  it('error stream', () => {
    const source$ = Rx.Observable.throw('error');
    const expected = '#';

    scheduler.expectObservable(source$).toBe(expected);
    scheduler.flush();
  });

  it('never stream', () => {
    const source$ = Rx.Observable.never();
    const expected = '-----';

    scheduler.expectObservable(source$).toBe(expected);
    scheduler.flush();
  });

  it('interval in TestScheduler', () => {
    const source$ = Rx.Observable.interval(10, scheduler).take(4).map(x => x.toString());
    const expected = '-012(3|)';

    scheduler.expectObservable(source$).toBe(expected);

    scheduler.flush();
  });

  it('check subscription marble', () => {
    const source1   =    '-a-b--|';
    const source2   =          '-c--d-|';

    const expectedRes  = '-a-b---c--d-|';
    const expectedSub1 = '^-----!';
    const expectedSub2 = '------^-----!';

    const src1$ = scheduler.createColdObservable(source1);
    const src2$ = scheduler.createColdObservable(source2);

    scheduler.expectObservable(src1$.concat(src2$)).toBe(expectedRes);
    scheduler.expectSubscriptions(src1$.subscriptions).toBe(expectedSub1);
    scheduler.expectSubscriptions(src2$.subscriptions).toBe(expectedSub2);
    scheduler.flush();
  });

  it('check subscription marble', () => {
    const source1   =    '-a-b--|';
    const source2   =          '-c--d-|';

    const expectedRes  = '-a-b---c--d-|';
    const expectedSub1 = '^-----!';
    const expectedSub2 = '------^-----!';

    const src1$= scheduler.createColdObservable(source1);
    const src2$ = scheduler.createColdObservable(source2);

    scheduler.expectObservable(src1$.concat(src2$)).toBe(expectedRes);
    scheduler.expectSubscriptions(src1$.subscriptions).toBe(expectedSub1);
    scheduler.expectSubscriptions(src2$.subscriptions).toBe(expectedSub2);
    scheduler.flush();
  });

  it('check subscription marble of hot observable', () => {
    const source      = '^a-b--|';
    const expectedRes = '-a-b--|';
    const expectedSub = '^-----!';

    const source$ = scheduler.createHotObservable(source);

    scheduler.expectObservable(source$).toBe(expectedRes);
    scheduler.expectSubscriptions(source$.subscriptions).toBe(expectedSub);
    scheduler.flush();
  });

});
