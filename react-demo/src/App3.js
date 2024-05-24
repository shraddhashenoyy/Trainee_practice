import React from "react";
//1.constructor() and render()
class App3 extends React.Component {
    constructor(props) {
        super(props); // Call super(props) as the first statement
        this.state = {
            id: 1,
            name: "test"
        };
    }
    
    render() {
        return (
            <div>
                <p>{this.state.id}</p>
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default App3;