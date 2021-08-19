import React from 'react'

function NameList() {
    const names = ["Scott", "Adam", "Tuan"]

    return (
        <div>
            <ul>
                <li>{names[0]}</li>
                <li>{names[1]}</li>
                <li>{names[2]}</li>
            </ul>
        </div>
    )
}

export default NameList
