import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/isEmpty';

Observable.prototype.defaultObservableIfEmpty = function(default$) {
  const selector = shared => {
    return shared.merge(
      shared.isEmpty().mergeMap(
        empty => empty ? default$: Observable.empty()
      )
    );
  };
  return this.multicast(new Subject(), selector);
};

const source$ = Observable.empty();
const result$ = source$.defaultObservableIfEmpty(Observable.of(1, 2, 3));
result$.subscribe(value => console.log('observer : ' + value));

//const source2$ = Observable.of(1, 2);
//source2$.defaultObservableIfEmpty(Observable.of(3))
//  .subscribe(value => console.log('observer : ' + value));



