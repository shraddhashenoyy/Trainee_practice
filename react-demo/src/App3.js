import React from "react";
import ReactDOM from "react-dom/client";

// "&&" operator
// function MyCity(props){
//   const cities=["Bangalore","Mumbai","Chennai"];
//   return(
//     <>
//       <h1>Cities</h1>
//       {city.length>0 &&
//       <h2>The cities{city.length}</h2>}
//     </>
//   );
// }
// 
// export default MyCity;


// Ternary operator
function MyFirst(){
  return<h1>Hello!</h1>;
}

function MySecond(){
  return <h2>Hii,how are you???</h2>;
}

function App3(props){
  const myResult=props.myResult;
  return(
    <>
    {myResult ? <MyFirst/>:<MySecond/>}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <myFunction myResult={false}/>
    </>
   
);
export default App3;