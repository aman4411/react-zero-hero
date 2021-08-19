import React from 'react'

const Greeting = (props) => {
    //name ="Mahesh"
   // ? This is not possible  -> props.name ="Umesh"
   // ? Because porps is immutable
    console.log(props)
    return (
        <div>
            <h3>{props.name} is a {props.skills} : {props.children} </h3>   
        </div>
    )
}

export default Greeting