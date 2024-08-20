/** When we handle async requests in React, we need to pay attention if the component is already unmounted.

 Please implement useIsMounted() for us to easily tell if the component is still not unmounted. */

import {useEffect, useRef} from 'react';

export function useIsMounted(): () => boolean {
    const mountedRef = useRef<boolean>(true)
    // init ref to make it consistent value
    useEffect(() => {
        return () => {mountedRef.current = false}
    }, []);
    // init useEffect with cleanup callback with assignment of false to ref.current
    return () => {
        return mountedRef.current
    } // return function which returns the value of ref.current
}

/** useIsMounted is antipattern! https://legacy.reactjs.org/blog/2015/12/16/ismounted-antipattern.html */


// to try your code on the right panel
// export App() component like below

// export function App() {
//   ...
//   return <div>BFE.dev</div>
// }