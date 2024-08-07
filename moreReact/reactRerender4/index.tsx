import * as React from 'react'
import {useState, useEffect, FC} from 'react'
import { createRoot } from 'react-dom/client'

const A:FC = ({ children }) => { // A renders second
    console.log('A')
    const [state, setState] = useState(0) // we initialize state in A
    useEffect(() => {
        setState(state => state + 1)
    }, []) // and change it
    return children // return children
}

function B() {
    console.log('B') // child of A
    return <C/>
}

function C() { // child of B
    console.log('C')
    return null
}

function D() { // sibling of A
    console.log('D')
    return null
}

function App() {
    console.log('App') // App renders first
    return (
        <div>
            <A><B/></A>
            <D/>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)

/**
 * on first render we'll get App-A-B-C-D
 * on second render we set state in A
 * so React will rerender A and check if props changed in children
 * since they haven't, React won't rerender them
 * the answer will be App-A-B-C-D-A
 * */