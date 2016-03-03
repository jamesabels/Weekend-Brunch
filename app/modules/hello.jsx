// HELLO WORLD CLASS
class HelloWorld extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        console.log("Welcome to Weekend Brunch!"); 
        
        return (
            <h1>Weekend Brunch</h1>
        )
    }
}

module.exports = HelloWorld;