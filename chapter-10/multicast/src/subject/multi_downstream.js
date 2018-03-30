import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

const subject = new Subject();

const subscription1 = subject.subscribe(
  value => console.log('on observer 1 data: ' + value),
  err => console.log('on observer 1 error: ' + err.message),
  () => console.log('on observer 1 complete')
);

subject.next(1);

subject.subscribe(
  value => console.log('on observer 2 data: ' + value),
  err => console.log('on observer 2 error: ' + err.message),
  () => console.log('on observer 2 complete')
);

subject.next(2);
subscription1.unsubscribe();
subject.complete();

