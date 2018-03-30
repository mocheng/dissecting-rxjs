import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

Observable.prototype.takeWhileInclusive = function(predicate) {
  return this.multicast(new Subject(), shared => {
    return shared.takeWhile(predicate).concat(shared.take(1));
  });
};


const source$ = Observable.interval(1000).take(6);
const tick$ = source$.takeWhileInclusive(x => x < 2);

tick$.subscribe(value => console.log('observer : ' + value));


