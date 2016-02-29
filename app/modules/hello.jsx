// HELLO WORLD CLASS
class HelloWorld {

    constructor() {
        this.text = "Welcome to Weekend  Brunch";
    }

    log() {
        console.info(this.text);
    }

    render() {
        this.log();
        document.querySelector('.app').appendChild(document.createTextNode("Weekend Brunch"));
    }
}

module.exports = HelloWorld;