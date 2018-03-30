import Rx from 'rxjs';

export const counterPipe = (plus$, minus$) => {
  return Rx.Observable.merge(plus$.mapTo(1), minus$.mapTo(-1))
    .scan((count, delta) => count + delta, 0)
};
