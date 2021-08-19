import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log('clicked the button')
    }

    render() {
        return (
            <div>
               <h1>Button Click inside Class Component</h1>
               <button className="btn btn-primary" onClick={this.clickHandler}>Click</button>  
            </div>
        )
    }
}

export default ClassClick
