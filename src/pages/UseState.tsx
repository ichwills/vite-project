import React, { useState } from 'react'

export function UseState() {
    const [count, setCount] = useState(0)

    const [list, setList] = useState([0, 1])

    function handleChangeCount() {
        console.log(list)
        setList([...list, count])
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>Hello Vite + React!</p>
                <p>
                    <button type="button" onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </button>
                    <br />
                    <input type="text" />
                    <button onClick={handleChangeCount}>Add</button>
                    <ul>
                        {
                            list.map(item => {
                                <li>{item}</li>
                            })
                        }
                    </ul>
                </p>
            </header>
        </div>
    )
}