class Event {
    observcers = []
    constructor() {}

    on(eventName, callback) {
        const obj = {
            key: eventName,
            value: callback,
        }
        this.observcers.push(obj)
    }

    emit(eventName, obj) {
        const observer = this.observcers.find((v) => v.key === eventName)
        observer.value(obj)
    }
}

const ev = new Event()
ev.on("click", (a) => {
    console.log(a)
    console.log("hello world!")
})

ev.emit("click", { name: "ingoo" })
