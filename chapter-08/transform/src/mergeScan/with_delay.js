import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeScan';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/concat';

const source$ = Observable.interval(1000);
const result$ = source$.mergeScan((accumulation, value) => {
  console.log(`accumulation = ${accumulation}, value = ${value}`);
  /*
  return Observable.of(accumulation+value).concat(
    Observable.of(23).delay(500)
  );
  */
  return Observable.of(23).concat(
    Observable.of(accumulation + value).delay(1200)
  ).concat(Observable.interval(100));
},
0); // must have seed argument

result$.subscribe(x => console.log(`downstream ${x}`));


