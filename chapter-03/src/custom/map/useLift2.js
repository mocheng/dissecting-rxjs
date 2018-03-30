import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/do';
import {Subscriber} from 'rxjs/Subscriber';

class MapOperator {
  constructor(project) {
    this.project = project;
  }

  call(sink, source) {
    return source.subscribe(
      new MapObserver(sink, this.project)
    );
  }
}

class MapObserver extends Subscriber {
  constructor(sink, project) {
    super(sink);
    this.sink = sink;
    this.project = project;
  }

  next(value) {
    this.sink.next(this.project(value))
  }
}

function map(project) {
  return this.lift(new MapOperator(project));
}

Observable.prototype.map = map;

const source$ = Observable.interval(1000).do(x => console.log('# interval', x));
const result$ = source$.map(x => x * 2);

const sub = result$.subscribe(
  console.log,
  error => console.log('catch', error),
  () => console.log('complete')
);

setTimeout(() => {
  sub.unsubscribe();
}, 5000);


