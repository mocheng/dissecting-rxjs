/*
const createPlus$ = () => {
  return Rx.Observable.fromEvent(document.querySelector('#plus'), 'click');
};

const createMinus$ = () => {
  return Rx.Observable.fromEvent(document.querySelector('#minus'), 'click');
};
*/

const createClick$ = (id) => {
  return Rx.Observable.fromEvent(document.querySelector(`#${id}`), 'click');
}


const counterPipe = (plus$, minus$) => {
  return Rx.Observable.merge(plus$.mapTo(1), minus$.mapTo(-1))
    .scan((count, delta) => count + delta, 0)
};

const observer = {
    next: currentCount => {
      document.querySelector('#count').innerHTML = currentCount;
    }
};

//counterPipe(createPlus$(), createMinus$()).subscribe(observer);
counterPipe(createClick$('plus'), createClick$('minus')).subscribe(observer);

