import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/defer';
import fetch from 'node-fetch';

const observableFactory = () => fetch('https://api.github.com/repos/ReactiveX/rxjs');
const source$ = Observable.defer(observableFactory);

source$.subscribe(console.log);


