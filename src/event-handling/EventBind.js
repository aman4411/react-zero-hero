import React, { Component } from 'react'

class EventBind extends Component {

    constructor() {
        super()
    
        this.state = {
             message: 'Hello Uma'
        }

        // ? 3rd Approach
       // this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage =()=>{
        this.setState({
            message: "Thank You Very Much for Clicking"
        });
    }


    
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
               {/* <button className="btn btn-primary" onClick={this.changeMessage}>Click</button> */}
               {/*1st Approach */}
               {/* <button className="btn btn-primary" onClick={this.changeMessage.bind(this)}>Click</button> */}
               {/*2nd Approach */}
               {/* <button className="btn btn-primary" onClick={()=>this.changeMessage()}>Click</button> */}
               {/*3rd Approach */}
                 {/* <button className="btn btn-primary" onClick={this.changeMessage}>Click</button> */}
                {/*4th Approach */}
                <button className="btn btn-primary" onClick={this.changeMessage}>Click</button>

            </div>
        )
    }
}

export default EventBind
