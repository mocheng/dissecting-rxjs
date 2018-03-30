import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

const source$ = Observable::of(1, 2, 3);

source$.subscribe(console.log);

