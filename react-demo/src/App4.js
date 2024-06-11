import React from 'react';
import ReactDOM from 'react-dom/client';

function City(props) {
  return (
    <div>
         <h2>Currently I'm doing B.E</h2>
         <h2>I live in{ props.place }!</h2>;
    </div>
 )
}

const myElement = <City place="Bangalore" />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

export default City;

              

              