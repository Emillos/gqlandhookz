import React, { useState, useEffect } from 'react'

const Example = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

    return (
        <div>
            <p>you clicked {count} </p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>

    )
}

export default Example