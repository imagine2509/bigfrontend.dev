import {useEffect, useRef, useState} from "react";

/** we initialize hook with any value which is the same type with return value */
export function useDebounce<T>(value: T, delay: number): T {
    /** create a stable ref to timer */
    const timerRef = useRef(null)
    const [val, setVal] = useState(value) // state for store value with delay

    useEffect(() => {
        if (timerRef.current) { // if timer exists, we clear it
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => setVal(value), delay) // set the new timer to replace val
    }, [value]);

    return val
}