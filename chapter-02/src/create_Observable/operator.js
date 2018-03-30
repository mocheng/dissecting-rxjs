import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const onSubscribe = observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
};

const source$ = Observable.create(onSubscribe);

source$.map(x => x*x).subscribe(console.log);

