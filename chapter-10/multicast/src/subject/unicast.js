import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

const tick$ = Observable.interval(1000).take(5);

subject.subscribe(value => console.log('observer 1: ' + value));
setTimeout(() => {
  subject.subscribe(value => console.log('observer 2: ' + value));
}, 2000);


