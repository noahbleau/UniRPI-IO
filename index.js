// UniRIO library for handling GPIO pins in a mock environment
class UniRIO {
    // Initialize the UniRIO instance with the specified pin, mode, and options
    constructor(pin, mode, options = {}) {
        console.log('\x1b[36m%s\x1b[0m', `[UniRIO] Using UniRIO on pin ${pin}`);
        this.pin = pin;
        this.mode = mode;
        this.isMock = true;
    }

    // Write a value to the specified pin
    write(value) {
        console.log('\x1b[36m%s\x1b[0m', `[UniRIO] Writing value ${value} on pin ${this.pin}`);
    }

    // Close the specified pin
    close() {
        console.log('\x1b[36m%s\x1b[0m', `[UniRIO] Closing pin ${this.pin}`);
    }
}

module.exports = { UniRIO };