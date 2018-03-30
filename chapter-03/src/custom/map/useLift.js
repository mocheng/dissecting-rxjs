import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/do';
import {Subscriber} from 'rxjs/Subscriber';

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


// This operator actually has a bug. It cannot be unsubscribe-d.
function map(project) {
  return this.lift(function(source$) {
    return source$.subscribe({
      next: value => {
        try {
          this.next(project(value));
        } catch (err) {
          this.error(err);
        }
      },
      error: err => this.error(error),
      complete: () => this.complete(),
    });
  });
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


