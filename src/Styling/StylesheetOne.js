import React from 'react'

// Inline Styling

const heading = {
    fontSize: '72px',
    color: 'Blue'
}

const div = {
    backgroundColor : 'crimson',
    color: 'white',
    width: '300px',
    height: '200px'
}

function StylesheetOne() {
    return (
        <div style={div}>
            <h1 style={heading}>Inline Styling</h1>
        </div>
    )
}

export default StylesheetOne
