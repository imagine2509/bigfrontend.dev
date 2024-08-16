// This is a React Quiz from BFE.dev

import * as React from 'react'
import { useState, memo, createContext, useEffect, useContext} from 'react'
import { createRoot } from 'react-dom/client'

const MyContext = createContext(0);

function B() {
    const count = useContext(MyContext)
    console.log('B')
    return null
}

const A = memo(() => {
    console.log('A')
    return <B/>
})

function C() {
    console.log('C')
    return null
}
function App() {
    const [state, setState] = useState(0)
    useEffect(() => {
        setState(state => state + 1)
    }, [])
    console.log('App')
    return <MyContext.Provider value={state}>
        <A/>
        <C/>
        </MyContext.Provider>
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)

/**
 * first render will be: App - A - B (child of A) - C (sibling of A)
 * then setState function invoked
 * second render will be App (state changed in it) - A memoized (no props change => no rerender)
 * - B will rerender (change of context value) - C will rerender cause setState in App
  */

