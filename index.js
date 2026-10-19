// UniRPI-IO library for handling GPIO pins in a mock environment
class URIO {
    // Initialize the instance with the specified pin, mode, and options
    constructor(pin, mode, options = {}) {
        console.log('\x1b[36m%s\x1b[0m', `[UniRPI-IO] Using UniRPI-IO on pin ${pin}`);
        this.pin = pin;
        this.mode = mode;
        this.isMock = true;
    }

    // Write a value to the specified pin
    write(value) {
        console.log('\x1b[36m%s\x1b[0m', `[UniRPI-IO] Writing value ${value} on pin ${this.pin}`);
    }

    // Close the specified pin
    close() {
        console.log('\x1b[36m%s\x1b[0m', `[UniRPI-IO] Closing pin ${this.pin}`);
    }
}

module.exports = { URIO };