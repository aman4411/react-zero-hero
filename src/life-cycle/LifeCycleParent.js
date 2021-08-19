import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild'

export class LifeCycle extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('Lifecycle of Parent - Constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle of Parent - getDerivedStateFromProps')
        return {}
    }

    componentDidMount(){
        console.log('Lifecycle of Parent - componentDidMount')
    }

    render() {
        console.log('Lifecycle of Parent - Render')
        return (
            <div>
                <h1>Lifecycle Methods of Parent</h1>
                <LifeCycleChild/>
            </div>
        )
    }
}

export default LifeCycle
