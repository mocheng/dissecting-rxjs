const Rx = require('rxjs');
const {TestScheduler} = Rx;

const marbleHelpers = require('./marble-testing');
const {hot, cold, time, expectObservable, expectSubscriptions, assertDeepEqual} = marbleHelpers;

global.rxTestScheduler = null;
global.cold = cold;
global.hot = hot;
global.time = time;
global.expectObservable = expectObservable;
global.expectSubscriptions = expectSubscriptions;

const originaIt = global.it;

const testCase = function(description, fn) {
  if (fn.length === 0) {
    originaIt(description, function() {
      global.rxTestScheduler = new TestScheduler(assertDeepEqual);
      try {
        fn();
        global.rxTestScheduler.flush();
      } finally {
        global.rxTestScheduler = null;
      }
    });
  } else {
    originaIt.apply(this, arguments);
  }
};

global.test = testCase;

