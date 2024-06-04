import React from "react";
import ReactDOM from "react-dom/client";
import {component} from "react";

class EventBinds extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message:"Hello,Welcome to React course"
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:"you are completed"
        })

        console.log(this)
    }
      render(){
        return(
            <div>
            <div>{this.state.message}</div>
            <h2>Example for Binding Event Handlers.</h2>
            <p></p>
               {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
               {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
               <button onClick={this.clickHandler}>Click</button>
            </div>
        )
      }
}
export default EventBinds;