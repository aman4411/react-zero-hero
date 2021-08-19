import React from 'react'

function NameListOne() {
    const names = ["Scott", "Adam", "Tuan"]

    return (
        <div>
            {
                names.map(name => <h2>{name}</h2>)
               // names.map(name => {return <h2>{name}</h2>})
               // names.map(name =>(<h2>{name}</h2>))
            }
        </div>
    )
}

export default NameListOne
