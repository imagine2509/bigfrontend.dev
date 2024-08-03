/** Create a hook to tell if it is the first render. */


import {useRef} from "react";

export function useIsFirstRender(): boolean {
    /** ref is only thing which can change and don't trigger rerender
     * we always can gain access to ref.current, so set it to zero */
    const ref = useRef(0)
    /** on each rerender hook will activate and increment ref.current */
    ref.current++;
    /** return true if ref.current is 1 (means it is the first render) */
    return ref.current === 1;
}

// if you want to try your code on the right panel
// remember to export App() component like below

export function App() {
  return <div>your app</div>
}