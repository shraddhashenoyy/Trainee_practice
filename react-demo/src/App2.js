//1.constructor() and render()
import React from "react";

class App2 extends React.component(){
constructor(props){
  super(props);
  this.state={city:"red"};
}
render(){
  return(
    <h1>I'm leaving in {this.state.city} </h1>
  );
 }
}

export default App2;