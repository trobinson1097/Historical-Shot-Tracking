import { useState } from 'react'

function Players() {
    const [count, setCount] = useState(0)



    return (
        <>
            <div id="michael-jordan">Michael Jordan</div>
            <div id="george-gervin">George Gervin</div>
            <div id="magic-johnson">Magic Johnson</div>
            <div id="larry-bird">Larry Bird</div>
            <div id="hakeem">Hakeem</div>
        </>
    )
}

export default Players