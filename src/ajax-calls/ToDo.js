import React, { Component } from 'react'

class ToDo extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             todos: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => this.setState({todos:json}))
    }
      
    render() {
        const todoList = this.state.todos.map(todo => (
            <ul key={todo.id}>
                <li>{todo.userId}</li>
                <li>{todo.title}</li>
                <li>{todo.completed ? 'True' : 'False'}</li>
            </ul>
        ))

        return (
            <div className="container">
                <h2>List of ToDos</h2>
                <ol>
                    {todoList.map(todo => <li>{todo}</li>)}
                </ol>
            </div>
        )
    }
}

export default ToDo
