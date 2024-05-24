import React from 'react';
import ReactDOM from 'react-dom/client';

class Child extends React.Component {
  componentWillUnmount() {
    alert("The Child component is about to be unmounted.");
  }

  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}
  
export default Child;
