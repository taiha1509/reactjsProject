import React from 'react';
import ReactDOM from "react-dom";

class FU extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index : 1
        };
    }

    changeColor(color) {
        var title = document.getElementById("title");
        ReactDOM.findDOMNode(title).style.color = color;
    }

    render(){
        return(
        <div>
            <p id="title">value : {Math.random()}</p>
            <button onClick={() => {
                this.forceUpdate();
                this.changeColor("black")
            }}>reload</button>
            <button onClick={() => this.changeColor("red")}>change color</button>
        </div>
        )
    }
}

export default FU;