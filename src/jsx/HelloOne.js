import React from 'react'

function HelloOne(){
    return React.createElement(
            'div', 
            {id: 'dVHeader', className: 'header'}, 
           React.createElement(
               'h1', 
               {id: 'main-header', className: 'header-message'}, 
            'Hello World'))
}

export default HelloOne
