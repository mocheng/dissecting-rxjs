import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/merge';

const coldSource$ = Observable.interval(1000).take(2).do(x => console.log('source ', x));
const tick$ = coldSource$;
const delayedTicks$ = tick$.delay(500);
const mergedTick$ = delayedTicks$.merge(tick$);

mergedTick$.subscribe(value => console.log('observer : ' + value));




