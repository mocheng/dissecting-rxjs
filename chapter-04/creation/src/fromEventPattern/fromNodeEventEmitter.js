import {Observable} from 'rxjs/Observable';
import EventEmitter from 'events';
import 'rxjs/add/observable/fromEventPattern';

const emitter = new EventEmitter();

const addHandler = (handler) => {
  emitter.addListener('msg', handler);
};

const removeHandler = (handler) => {
  emitter.removeListener('msg', handler);
}

const source$ = Observable.fromEventPattern(addHandler, removeHandler);

const subscription = source$.subscribe(
  console.log,
  error => console.log('catch', error),
  () => console.log('complete')
);

emitter.emit('msg', 'hello');
emitter.emit('msg', 'world');

subscription.unsubscribe();

emitter.emit('msg', 'end');


