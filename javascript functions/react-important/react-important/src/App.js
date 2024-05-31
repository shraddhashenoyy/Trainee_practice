import React from "react";
import ReactDOM from "react-dom/client";


function myFirst(){
  return<h1>Hello!</h1>;
}

function mySecond(){
  return <h2>Hii,how are you???</h2>;
}

function myFunction(props){
  const myResult=props.myResult;
  if(myResult){
    return<h1>myFirst!</h1>;
  }
  return <h2>mySecond!</h2>;
}

ReactDOM.render(<myFunction myResult={false}/>);