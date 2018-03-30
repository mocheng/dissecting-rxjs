const plus$ = Rx.Observable.fromEvent(document.querySelector('#plus'), 'click');
const minus$ = Rx.Observable.fromEvent(document.querySelector('#minus'), 'click');

Rx.Observable.merge(plus$.mapTo(1), minus$.mapTo(-1))
  .scan((count, delta) => count + delta, 0)
  .subscribe(
    currentCount => {
      document.querySelector('#count').innerHTML = currentCount;
    }
  );
