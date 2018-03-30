import {range} from 'rxjs/observable/range';

const source$ = range(1, 5);

source$.subscribe(console.log);
