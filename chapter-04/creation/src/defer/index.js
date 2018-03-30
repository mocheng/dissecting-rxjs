import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/of';

const observableFactory = () => Observable.of(1, 2, 3);
const source$ = Observable.defer(observableFactory);

source$.subscribe(console.log);
source$.subscribe(console.log);


