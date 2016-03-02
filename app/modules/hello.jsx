var React = require('react');

// HELLO WORLD CLASS
class HelloWorld extends React.Component {

    constructor(props) {
        super(props)
        this.text = "Welcome to Weekend Brunch";
    }

    log() {
        console.info(this.text);
    }

    render() {
        return (
            <h1>this.text</h1>
        )
    }
}

module.exports = HelloWorld;