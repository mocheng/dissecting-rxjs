import {Observable} from 'rxjs/Observable';

Observable.range = function(start, count) {
  return Observable.create((observer) =>  {
    let index = start;
    let end = start + count;
    do {
      if (index >= end) {
        observer.complete();
        break;
      }
      observer.next(index++);
    } while (true);
  });
};

Observable.range(1, 1).subscribe(console.log);

