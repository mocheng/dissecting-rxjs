import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/range';
import {Scheduler} from 'rxjs/Scheduler';


class CustomSchedulerAction extends Subscription {
  constructor(scheduler, work) {
    console.log('#enter CustomSchedulerAction constructor: scheduler', scheduler);
    console.log('#enter CustomSchedulerAction constructor: work', work);

    super(...arguments);
  }

  schedule(state, delay) {
    console.log('#enter CustomSchedulerAction schedule:  state', state);
    console.log('#enter CustomSchedulerAction schedule:  delay', delay);
    return this;
  }
}

class CustomScheduler extends Scheduler {
  schedule(work, delay, state) {
    console.log('#enter CustomScheduler schedule: work ', work);
    console.log('#enter CustomScheduler schedule: delay', delay);
    console.log('#enter CustomScheduler schedule: state', state);

    //if (delay === void 0) { delay = 0; }

    console.log(work.call);
    work.call(this, state);
    return this;
    //return new this.SchedulerAction(this, work).schedule(state, delay);
  }

  now() {
    console.log('#enter CustomScheduler now');
    return Date.now ? Date.now : function () { return +new Date(); };
  }
}

console.log(Scheduler);

const timeStart = new Date();
const source$ = Observable.range(1, 100000, new CustomScheduler(CustomSchedulerAction));
//const source$ = Observable.range(1, 100000);

console.log('before subscribe');
source$.subscribe({
  complete: () => {
    console.log('##### Time elapsed: ' + (Date.now() - timeStart) + 'ms');
  }
});
console.log('after subscribe');



