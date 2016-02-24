// HELLO WORLD CLASS
class HelloWorld {

    constructor() {
        this.text = "Welcome to Electron Boilerplate";
    }

    log() {
        console.info(this.text);
    }
}

module.exports = HelloWorld;