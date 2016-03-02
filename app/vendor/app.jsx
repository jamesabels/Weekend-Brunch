// IMPORTS 
const React = require('react');
const HelloWorld = require("modules/hello");

const renderTarget = document.querySelector('.app'); 

// APP CLASS 
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <HelloWorld />
        )
    }
}

// INIT FUNCTION
(function(){
    ReactDOM.render(<App />, renderTarget);    
})();