import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/take';

Observable.prototype.makeHot = function () {
  const cold$ = this;
  const subject = new Subject();
  cold$.subscribe(subject);
  //return subject;
  return Observable.create((observer) => subject.subscribe(observer));
}

const hotTick$ = Observable.interval(1000).take(3).makeHot();

hotTick$.subscribe(value => console.log('observer 1: ' + value));
setTimeout(() => {
  hotTick$.subscribe(value => console.log('observer 2: ' + value));
}, 1500);


