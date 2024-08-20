

import React, {useEffect, useRef} from 'react'

export function useClickOutside(callback: () => void) {
    const ref = useRef<HTMLElement>(null) // init ref to access DOM
    useEffect(() => {
        const click = ({target}: Event) => { // create a listener function
            if (ref.current && target && !ref.current.contains(target as Node)) {
                // if ref has an element and it has target which is not contains event.target
                callback()
            }
        }
        document.addEventListener('click', click) // add
        return () => document.removeEventListener('click', click) // cleanup
    }, []);

    return ref
}

// to try your code on the right panel
// export App() component like below

// export function App() {
//   return <div>your app</div>
// }

/** function Component() {
 const ref = useClickOutside(() => {
 alert('clicked outside')
 });
 return <div ref={ref}>..</div>
 } */