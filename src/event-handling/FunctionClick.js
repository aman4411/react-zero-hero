import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button Clicked')
    }
    return (
        <div>
            <h1>Button Click inside Function Component</h1>
           <button className="btn btn-primary" onClick={clickHandler}>Click</button> 
        </div>
    )
}

export default FunctionClick
