import {async} from 'rxjs/scheduler/async';
import {queue} from 'rxjs/scheduler/queue';

async.schedule(() => console.log('async 1'));
queue.schedule(() => console.log('queue 1'));

async.schedule(() => console.log('async 2'), 1);
queue.schedule(() => console.log('queue 2'), 1);

const Rx = require('rxjs');

/*
Rx.Scheduler.async.schedule(() => console.log('async 3'));
Rx.Scheduler.queue.schedule(() => console.log('queue3'));

Rx.Scheduler.async.schedule(() => console.log('async 4'), 1);
Rx.Scheduler.queue.schedule(() => console.log('queue 4'), 1);
*/






