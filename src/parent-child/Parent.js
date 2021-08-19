import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parent: 'Parent Component'
        }

        this.callParent = this.callParent.bind(this)
    }
    
    callParent(child){
        console.log(this)
        alert(`Calling ${this.state.parent} from ${child}`)
    }


    render() {
        return (
            <div>
                <Child callParent={this.callParent} />
            </div>
        )
    }
}

export default Parent
