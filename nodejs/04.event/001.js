const EventEmitter = require("events")

const myEvent = new EventEmitter()

myEvent.addListener("event1", () => {
    console.log("event 1")
})

myEvent.on("event2", () => {
    console.log("event 2")
})

myEvent.once("event3", () => {
    console.log("event 3")
})

myEvent.emit("event1")
myEvent.emit("event2")
myEvent.emit("event2")
myEvent.emit("event3")
myEvent.emit("event3")
