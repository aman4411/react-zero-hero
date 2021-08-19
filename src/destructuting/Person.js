import React, { Component } from 'react'

class Person extends Component {

    constructor() {
        super()
    
        this.state = {
             name: 'Ayn Rand',
             city: 'Benguluru',
             isActive: false
        }
    }
    
    toggle(){
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        const {name, city, isActive} = this.state     
        return (
            <div>
                <h1>Her name is {name}</h1>
                <h1>She is from {city} : 
                {isActive?"True": "False"}</h1>
                <button className="btn btn-primary" 
                    disabled={this.state.isActive} 
                    onClick={()=>this.toggle()}
                >Click Me</button>
            </div>
        )
    }
}

export default Person
