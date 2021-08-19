import React, { Component } from 'react'

export class FormOne extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             country:'',
             gender:'',
             isActive: false
        }
    }

    getFormData(event){
        event.preventDefault();
        console.log(this.state)
    }

    render() {

        return (
            <div className="container">
                <h2>Form Component</h2>
                <br />
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" 
                               className="form-control w-50"
                               value={this.state.username}
                               onChange={event => {this.setState({username : event.target.value})}}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Comments &nbsp;</label>
                        <textarea className="form-control w-50"
                                  value={this.state.comments}
                                  onChange={event => this.setState({comments: event.target.value})}>
                        </textarea> 
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Country &nbsp;</label>
                        <select className="form-select w-50"
                                value={this.state.country}
                                onChange={(event) => this.setState({country : event.target.value})}>
                            <option value="">Select Country</option>
                            <option value="1">India</option>
                            <option value="2">Japan</option>
                            <option value="3">Australia</option>
                        </select>
                    </div>
                    <br />
                    <div className="from-group">
                        <label>Gender &nbsp;</label>
                        <input type="radio" className="form-check-input" 
                                            name="gender" 
                                            value={0}
                                            onChange={event => this.setState({gender : event.target.value})}
                        /> Male &nbsp;
                        <input type="radio" 
                               className="form-check-input" 
                               name="gender" 
                               value={1}
                               onChange={event => this.setState({gender : event.target.value})}
                        /> Female
                    </div>
                    <br />
                    <div className="from-group">
                        <label>isActive &nbsp;</label>
                        <input type="checkbox" className="form-check-input"
                                               onChange={() => this.setState({isActive : !this.state.isActive})} />
                    </div>
                    <br />
                    <div className="form-group">
                        <button className="btn btn-primary" 
                                type="submit"
                                checked={this.state.isActive}
                                onClick={event => this.getFormData(event)}>
                            Get Form Data
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormOne
