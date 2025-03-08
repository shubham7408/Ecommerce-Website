const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello, World! ${name}`);
});

myEmitter.emit("greet","Shubham");

myEmitter.once("onlyone",() => {
    console.log("This will only run once");
});

myEmitter.emit("onlyone");
myEmitter.emit("onlyone");

