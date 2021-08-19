import React from 'react'

function StudentList() {

    const names = ['Scott', 'Adam', 'Tuan','Uma']
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return <div>{nameList}</div>
}

export default StudentList
