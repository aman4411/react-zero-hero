import React from 'react'
import InPersonList from './InPersonList'

function Person() {

    const persons = [
        {
            id: 1,
            name: "Scott",
            age:45,
            skill: 'ReactJS'
        },
        {
            id: 2,
            name: "Adam",
            age:43,
            skill: 'Angular'
        },
        {
            id: 3,
            name: "Tuan",
            age:42,
            skill: '.Net'
        },
        {
            id: 4,
            name: "Uma",
            age:39,
            skill: 'JavaScript'
        },
    ]
    const personList =persons.map(person =>(<InPersonList key={person.id} person={person}/>))
    return <div>{personList}</div>
}

export default Person
