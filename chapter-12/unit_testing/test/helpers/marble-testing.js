const chai = require('chai');
const {assert} = chai;

const assertDeepEqual = assert.deepEqual.bind(assert);

function hot() {
  if (!global.rxTestScheduler) {
    throw 'tried to use hot() in async test';
  }
  return global.rxTestScheduler.createHotObservable.apply(global.rxTestScheduler, arguments);
  //return global.rxTestScheduler.createHotObservable(...arguments);
}

function cold() {
  if (!global.rxTestScheduler) {
    throw 'tried to use cold() in async test';
  }
  return global.rxTestScheduler.createColdObservable.apply(global.rxTestScheduler, arguments);
  //return global.rxTestScheduler.createColdObservable(...arguments);
}

function time(marbles) {
  if (!global.rxTestScheduler) {
    throw 'tried to use time() in async test';
  }
  return global.rxTestScheduler.createTime.apply(global.rxTestScheduler, arguments);
}

function expectObservable() {
  if (!global.rxTestScheduler) {
    throw 'tried to use expectObservable() in async test';
  }
  return global.rxTestScheduler.expectObservable.apply(global.rxTestScheduler, arguments);
}

function expectSubscriptions() {
  if (!global.rxTestScheduler) {
    throw 'tried to use expectSubscriptions() in async test';
  }
  return global.rxTestScheduler.expectSubscriptions.apply(global.rxTestScheduler, arguments);
}

module.exports = {
  hot: hot,
  cold: cold,
  time: time,
  expectObservable: expectObservable,
  expectSubscriptions: expectSubscriptions,
  assertDeepEqual: assertDeepEqual
};

//export {hot, cold, time, expectObservable, expectSubscriptions, assertDeepEqual};
