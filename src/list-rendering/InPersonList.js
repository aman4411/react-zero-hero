import React from 'react'

function InPersonList(props) {
    let {person} = props
    return (
        <React.Fragment>
                <h2>I am {person.name}. 
                    I am {person.age} years old.
                    I know {person.skill}
                </h2>
        </React.Fragment>
    )
}

export default InPersonList
