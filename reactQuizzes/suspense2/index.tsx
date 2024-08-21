// This is a React Quiz from BFE.dev

import * as React from 'react'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'

const resource = (() => {
    let data = null
    let status = 'pending'
    let fetcher = null
    return {
        get() {
            if (status === 'ready') {
                return data
            }
            if (status === 'pending') {
                fetcher = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        data = 1
                        status = 'ready'
                        resolve()
                    }, 100)
                })
                status = 'fetching'
            }

            throw fetcher
        }
    }
})()

function A() {
    console.log('A1')
    const data = resource.get()
    console.log('A2')
    return <p>{data}</p>
}

function B() {
    console.log('B')
    return null
}

function Fallback() {
    console.log('fallback')
    return null
}

function App() {
    console.log('App')
    return <div>
        <Suspense fallback={<Fallback/>}>
            <A/>
            <B/>
        </Suspense>
    </div>
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)

/** first render: App - A1 - B (sibling) */
/** then fallback activates */
/** then A renders A1 - A2 */
/** then B renders again as a child of suspense */
// App - A1 - B (sibling) - fallback - A1 - A2 - B