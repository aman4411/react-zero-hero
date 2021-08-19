import React, { Component } from 'react'

export class LifeCycleChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('Lifecycle of Child - Constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle of Child - getDerivedStateFromProps')
        return {}
    }

    componentDidMount(){
        console.log('Lifecycle of Child - componentDidMount')
    }

    render() {
        console.log('Lifecycle of Child - Render')
        return (
            <div>
                <h1>Lifecycle Methods of Child</h1>
            </div>
        )
    }
}

export default LifeCycleChild
