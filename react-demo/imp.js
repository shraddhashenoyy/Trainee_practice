//EXAMPLE OF useReducer
import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {useRef} from "react";
import {useReducer} from "react";
const reducer = (state, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + 1 };
        case 'DECREMENT':
          return { count: state.count - 1 };
        default:
          return state;
      }
    };
    
    
    const App =()=>{
      const [state, dispatch] = useReducer(reducer, { count: 0 });
    
      return (
        <div>
          <h2>count: {state.count}</h2>
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
          <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>
        </div>
      );
    };
    export default App;