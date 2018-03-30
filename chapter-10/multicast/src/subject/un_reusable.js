import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

const subject = new Subject();

subject.subscribe(
  value => console.log('on observer 1 data: ' + value),
  err => console.log('on observer 1 error: ' + err.message),
  () => console.log('on observer 1 complete')
);

subject.next(1);
subject.next(2);
subject.complete();

subject.subscribe(
  value => console.log('on observer 2 data: ' + value),
  err => console.log('on observer 2 error: ' + err.message),
  () => console.log('on observer 2 complete')
);

subject.next(3);
