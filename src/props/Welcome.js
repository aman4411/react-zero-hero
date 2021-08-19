import React, { Component } from 'react'

class Welcome extends Component {

    render() {
        let {name, message} = this.props
        return (
            <div>
                <h1>Hey {name}, {message}</h1>
            </div>
        )
    }
}

export default Welcome
