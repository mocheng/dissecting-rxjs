import EventEmitter from 'events';

const eventHub = new EventEmitter();

eventHub.on('data', (info) => console.log(info));

eventHub.emit('data', 'some data');
eventHub.emit('data', 'some other data');

