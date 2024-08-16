
import * as React from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore
import { screen, fireEvent } from '@testing-library/dom'

function App() {
    const [state, setState] = useState(0)
    console.log("App " + state)
    return (
        <div>
            <button onClick={() => {
        /** react will make all state updates before rerender */
        setState(count => count + 1) // 1
        setState(count => count * 2) // 2
        /** returns 2 after 1 click, will return 6 after second */
    }}>click me</button>
    </div>
)
}

(async () => { // async makes react wait for button appear before fireEvent
    const root = createRoot(document.getElementById('root'));
    root.render(<App/>)

    fireEvent.click(await screen.findByText('click me'))
})()

// result will be "App 0 App 2"