import React, { useState } from 'react';

const UseStateMsg = () => {
    // Define state variables using the useState hook
    let [msg, setMsg] = useState("Hello");
    let [counter, setCounter] = useState(1);

    // Event handler functions
    let gmHandler = () => {
        setMsg("Good Morning"); // Update the msg state to "Good Morning"
    }
    let gnHandler = () => {
        setMsg("Good Night"); // Update the msg state to "Good Night"
    }

    // JSX code to define the component's UI
    return (
        <div>
            <h1>useState Hooks</h1>
            <h3>Message: {msg}</h3>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
            <hr />
            <h3>counter: {counter}</h3>
            <button onClick={() => { setCounter(counter + 1) }}>+</button>
            <button onClick={() => { setCounter(counter - 1) }}>-</button>
        </div>
    );
}

export default UseStateMsg;
