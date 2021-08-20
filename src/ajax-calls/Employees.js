import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export class Employees extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             employees: [],
             employee: {
                 ID:'',
                 NAME:'',
                 EMAIL:'',
                 SALARY:''
             }
        }
    }
    
    componentDidMount(){
        this.getAllEmployees();
    }

     /*
        * CRUD Opeartions 
        ? C - CREATE
        ? R - READ
        ? U - UPDATE
        ? D - DELETE
    */
    
    // ? Reading the data
    getAllEmployees = () => {
        fetch('http://localhost:5001/api/employees')
        .then(response => response.json())
        .then(json => this.setState({employees:json}))
    }

    getEmployee(id){
        fetch(`http://localhost:5001/api/employees/${id}`)
        .then(response => response.json())
        .then(json => this.setState({employee:json[0]}))
        
    }

    addEmployee(){
        const postData = {
            method : "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                NAME: this.state.employee.NAME,
                EMAIL: this.state.employee.EMAIL,
                SALARY: this.state.employee.SALARY
            })
        }

        fetch('http://localhost:5001/api/employees',postData)
        .then(response => console.log(response))
        .then(data => {
            this.resetForm();
            this.getAllEmployees();
        });
    }

    updateEmployee(){
        const updateData = {
            method : "PUT",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                NAME: this.state.employee.NAME,
                EMAIL: this.state.employee.EMAIL,
                SALARY: this.state.employee.SALARY
            })
        }

        fetch(`http://localhost:5001/api/employees/${this.state.employee.ID}`,updateData)
        .then(response => console.log(response))
        .then(data => {
            this.resetForm();
            this.getAllEmployees();
        });
    }

    deleteEmployee(id){
        const deleteRequest = {
            method : "DELETE",
            headers: {'content-type': 'application/json'},
        }

        fetch(`http://localhost:5001/api/employees/${id}`,deleteRequest)
        .then(response => console.log(response))
        .then(data => {
            this.getAllEmployees();
        });
    }

    confirmDelete(id){
        confirmAlert({
            title: 'Delete Record',
            message : 'Are you sure, you want to delete this employee record?',
            buttons: [
                {
                    label : 'Yes',
                    onClick: () => this.deleteEmployee(id)
                },
                {
                    label: 'No',
                }
            ]
        })
    }

    resetForm(){
        this.setState({
            employee: {
                ID:'',
                NAME:'',
                EMAIL:'',
                SALARY:''
            }
        })
    }
    
    render() {
        const employeesList = this.state.employees.map(employee => (
            <tr key={employee.ID}>
                <td>{employee.ID}</td>
                <td>{employee.NAME}</td>
                <td>{employee.EMAIL}</td>
                <td>{employee.SALARY}</td>
                <td>
                    <button className="btn btn-primary"
                            onClick={() => this.getEmployee(employee.ID)}>
                        Edit
                    </button>&emsp;
                    <button className="btn btn-danger"
                            onClick={() => this.confirmDelete(employee.ID)}>
                        Delete
                    </button>
                </td>
            </tr>
        ))

        return (
            <div className="container">
                <br />
                <h2>Employee Portal</h2>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Emplyee Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>
                                <input type="text"
                                    value={this.state.employee.NAME}
                                    onChange={(event) => this.setState(prevState => ({
                                        employee: {
                                            ...prevState.employee,
                                            NAME: event.target.value
                                        }
                                    }))}
                                />
                            </th>
                            <th>
                                <input type="text"
                                    value={this.state.employee.EMAIL}
                                    onChange={(event) => this.setState(prevState => (
                                        {
                                            employee: {
                                                ...prevState.employee,
                                                EMAIL: event.target.value
                                            }
                                        }
                                    ))}
                                />
                            </th>
                            <th>
                                <input type="number"
                                    value={this.state.employee.SALARY}
                                    onChange={(event) => this.setState(prevState => (
                                        {
                                            employee : {
                                                ...prevState.employee,
                                                SALARY: event.target.value
                                            }
                                        }
                                    ))}
                                />
                            </th>
                            <th>
                                <button className="btn btn-success"
                                        onClick={()=> this.addEmployee()}>
                                    Add
                                </button> &nbsp;
                                <button className="btn btn-warning"
                                        onClick={() => this.updateEmployee()}>
                                    Update
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeesList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Employees
