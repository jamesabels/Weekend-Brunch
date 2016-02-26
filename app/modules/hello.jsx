// HELLO WORLD CLASS
class HelloWorld {

    constructor() {
        this.text = "Welcome to Electron Boilerplate";
    }

    log() {
        console.info(this.text);
    }

    render() {
        this.log();
        document.querySelector('.container').appendChild(document.createTextNode("Electron Boilerplate"));
    }
}

module.exports = HelloWorld;