import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';

const source$ = Observable.of(1, 2, 3);
const double$ = obs$ => obs$.map(x => x * 2);
const result$ = source$.let(double$);

result$.subscribe(console.log);
