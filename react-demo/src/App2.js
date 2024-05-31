import React from "react";
import ReactDOM from "react-dom/client";

// if-statement
function MyFirst(){
    return<h1>Hello!</h1>;
}
  
function MySecond(){
    return <h2>Hii,how are you???</h2>;
}
  
function App2(props){
    const myResult=props.myResult;
    if(myResult){
      return <MySecond/>;
    }else{
    return<MyFirst/>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <myFunction myResult={false}/>
    </>
   
);
 export default App2;