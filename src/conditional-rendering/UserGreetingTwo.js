import React, { Component } from 'react'

class UserGreetingTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
            return (
                this.state.isLoggedIn ? 
                <div>Welcome Scott</div> : 
                <div>Welcome Guest</div>
            )

    }
}

export default UserGreetingTwo
