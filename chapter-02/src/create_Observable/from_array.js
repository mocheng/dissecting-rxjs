import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

const arr = [1, 2, 3];
const source$ = Observable.from(arr);

source$.subscribe(console.log);

