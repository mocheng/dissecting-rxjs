import Rx from 'rxjs';
//import Rx from 'rxjs/Rx';

const source$ = Rx.Observable.of(1, 2, 3);

source$.subscribe(console.log);

