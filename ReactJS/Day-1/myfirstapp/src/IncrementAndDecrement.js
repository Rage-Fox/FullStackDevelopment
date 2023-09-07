import React, { useState } from "react";
function IncrementAndDecrement() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        if(count<=9)
            setCount(count + 1);
    };
    const decrementCount = () => {
        if(count>=1)
            setCount(count - 1);
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
};
export default IncrementAndDecrement;