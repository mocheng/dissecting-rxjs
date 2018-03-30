import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const source$ = Observable.of(1, 2, 3);

source$.subscribe(console.log);

