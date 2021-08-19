import React from 'react'

function Student(props) {
    let {name, subject, email} = props

    return (
        <div>
            <h4>{name} has chosen Subject {subject} , 
                you can contact him/her at {email}</h4>
        </div>
    )
}

export default Student
