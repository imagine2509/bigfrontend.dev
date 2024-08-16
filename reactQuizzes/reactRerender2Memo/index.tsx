// This is a React Quiz from BFE.dev
// What does the code snippet to the right output by console.log?

import * as React from 'react'
import { useState, useEffect, memo } from 'react'
import { createRoot } from 'react-dom/client'

function A() {
    console.log('A')
    return <B/>
}

const B = memo(() => {
    console.log('B')
    return <C/>
})

function C() {
    console.log('C')
    return null
}

function D() {
    console.log('D')
    return null
}

function App() {
    const [state, setState] = useState(0)
    useEffect(() => {
        setState(state => state + 1)
    }, [])
    console.log('App')
    return (
        <div>
            <A state={state}/>
            <D/>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)

/** The component tree is:
 * App
 * A --------- D
 * B (memoized)
 * C */

/**
 * The first render order will be:
 * App - A => B => C (from parent to child)
 * => D (we're going backwards to find siblings)
 * */

/**
 * next we change the state in App component, so we will rerender App =>
 * then A => B (memo)????
 *
 * because we don't pass state as a prop of B, B won't rerender because of memo
 *
 * And we again go backwards to find siblings and rerender D*/

/** The answer will be:
 * "App"
 * "A"
 * "B"
 * "C"
 * "D"
 * "App"
 * "A"
 * "D"*/