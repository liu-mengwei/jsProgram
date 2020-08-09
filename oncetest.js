let events = require('events');

let proxy = new events.EventEmitter();
proxy.once('love', () => { console.log('make love') });
proxy.once('love', () => { console.log('make love2') });

proxy.emit('love');

