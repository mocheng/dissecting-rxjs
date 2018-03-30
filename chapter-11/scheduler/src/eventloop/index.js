import {asap} from 'rxjs/scheduler/asap';
import {async} from 'rxjs/scheduler/async';
import {queue} from 'rxjs/scheduler/queue';

console.log('before schedule');
async.schedule(() => console.log('async'));
asap.schedule(() => console.log('asap'));
queue.schedule(() => console.log('queue'));
console.log('after schedule');



