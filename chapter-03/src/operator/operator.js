import Rx from 'rxjs';

const source$ = Rx.Observable.of(1, 2, 3, 4);

const result$ = source$.filter(x => x % 2 === 0).map(x => x * 2);

result$.subscribe(console.log);


