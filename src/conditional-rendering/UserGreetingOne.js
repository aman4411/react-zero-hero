import React, { Component } from 'react'

class UserGreetingOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    render() {
        let message;
        if(this.state.isLoggedIn) {
            message  = <h1>Welcome Scott</h1>
        } else {
            message  = <button className="btn btn-primary">Click this</button>
        }
            return (
                <div>
                    <h2>This is Element variable</h2>
                    {message}
                </div>
            )
    }
}

export default UserGreetingOne
