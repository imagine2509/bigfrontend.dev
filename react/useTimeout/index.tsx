import {useEffect, useRef, useState} from "react";

/** Create a hook to easily use setTimeout(callback, delay).

 reset the timer if delay changes
 DO NOT reset the timer if only callback changes */
const useTimeout = (callback: () => void, delay: number) => {
    const callbackRef = useRef(callback) // we should not reset timeout on callback change, so we use Ref
    callbackRef.current = callback // we should reinitialize current if callback changes

    useEffect(() => {
        const timeoutId = setTimeout(() => callbackRef.current(), delay) // set timeout
        return () => clearTimeout(timeoutId) // clear timeout on unmount
    }, [delay]); // useEffect should be reinvoked after delay changes
}

export function App() {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    useTimeout(() => {
        handleIncrement()
    }, 1000)
    return (
        <>
            <div>Counter: <span>{counter}</span></div>
    </>
);
}