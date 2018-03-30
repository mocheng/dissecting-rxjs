import {asap} from 'rxjs/scheduler/asap';
import {async} from 'rxjs/scheduler/async';

asap.schedule(() => console.log('asap 1'));
async.schedule(() => console.log('async 1'));

asap.schedule(() => console.log('asap 2'), 1);
async.schedule(() => console.log('async 2'), 1);

const Rx = require('rxjs');

console.log(async === Rx.Scheduler.async);
console.log(asap === Rx.Scheduler.asap);

/*
Rx.Scheduler.async.schedule(() => console.log('async 3'));
Rx.Scheduler.asap.schedule(() => console.log('asap 3'));

Rx.Scheduler.async.schedule(() => console.log('async 4'), 1);
Rx.Scheduler.asap.schedule(() => console.log('asap 4'), 1);
*/






