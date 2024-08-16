import {useState} from "react";

export function useToggle(on: boolean): [boolean, () => void] {
    const [value, setValue] = useState(on) //state for toggle
    const toggle = () => {
        setValue(!value) // set value to opposite function handler
    }
    return [value, toggle] // return both value and handler function
}