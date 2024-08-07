import * as React from 'react'
import {useState, useEffect, FC} from 'react'
import { createRoot } from 'react-dom/client'

// What does the code snippet to the right output by console.log?

const A: FC = ({ children }) => {
    console.log('A')
    return children
} // I refactored component a bit to not receive children required error

function B() {
    console.log('B')
    return <C/>
} // B is a child of A

function C() {
    console.log('C')
    return null
} // C is a child of B

function D() {
    console.log('D')
    return null
} // D is a sibling of A

function App() {
    const [state, setState] = useState(0)
    useEffect(() => {
        setState(state => state + 1)
    }, [])
    console.log('App')
    return (
        <div>
            <A><B/></A>
            <D/>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)

/** because we don't have any side effects or memoization, the output will be default react render:
 * App-A-B-C-D-App-A-B-C-D
 * */