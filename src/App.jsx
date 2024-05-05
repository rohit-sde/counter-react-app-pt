import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [counter, setCounter] = useState(0);
    // console.log(counter, setCounter);

    const add = () => {
        setCounter((state) => state + 1);
    };
    const sub = () => {
        setCounter((state) => state - 1);
    };
    const mul = () => {
        setCounter((state) => state * 2);
    };
    const div = () => {
        setCounter((state) => state / 2);
    };
    const reset = () => {
        setCounter((state) => state * 0);
    };

    return (
        <div>
            {counter}
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={div}>/</button>
            <button onClick={mul}>*</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default App;
