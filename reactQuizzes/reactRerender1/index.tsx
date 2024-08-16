// This is a React Quiz from BFE.dev
/** What does the code snippet to the right output by console.log? */

import * as React from 'react'
import { useState, useEffect} from 'react'
import { createRoot } from 'react-dom/client'

function A() {
    console.log('A')
    return <B/>
}

function B() {
    console.log('B')
    return <C/>
}

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

/**
 * the answer is App-A-B-C-D-App-A-B-C-D
 * firstly we render App
 * next we go from parent to children => A-B-C
 * next we go backwards on fiberTree and check for siblings => D
 * next we set state in App and pass it to A => App
 * next the render pattern is the same
 * */

