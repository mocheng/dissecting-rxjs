import {queue} from 'rxjs/scheduler/queue';

queue.schedule(() => {
  console.log('enter first action');
  queue.schedule(() => {
    console.log('enter second action');
  });
  console.log('leave first action');
});
