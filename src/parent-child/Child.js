import React from 'react'

function Child(props) {
    console.log(props)
    return (
        <div>
            <h2>Call Parent Method from Child</h2>
            <button className="btn btn-primary"
                    onClick={() => props.callParent('Child Component')}
            >Call Parent</button>
        </div>
    )
}

export default Child
