import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/merge';

const coldSource$ = Observable.interval(1000).take(2).do(x => console.log('source ', x));
const result$ = coldSource$.multicast(new Subject(), shared => {
  const tick$ = shared;
  const delayedTicks$ = tick$.delay(500);
  const mergedTick$ = delayedTicks$.merge(tick$);
  return mergedTick$;
});

result$.subscribe(value => console.log('observer : ' + value));




