import React, { Component } from 'react'
import axios from 'axios'

export class Users extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            users: []
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp => this.setState({users : resp.data}))
    }
    
    render() {
        const usersList = this.state.users.map(user => (
            <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
            </tr>
        ))

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users
