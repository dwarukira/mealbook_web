import React, { Component } from 'react'
import { API } from "../api"
export class Register extends Component {
    
    state = {
        username:"",
        email:"",
        password:"",
        error:null
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        
        let api = new API()
        api.signup(this.state).then(res => {
            this.props.history.push("/")
        }).catch(err => {
            if(err.response){
                console.log(err);
                
                err.response.json().then(message => {
                    this.setState({error:message})
                })
            }
        })
    }

    
    render() {
        return (
            <div className="container">
                <div className={`card mx-auto mt-5`}>
                    <div className="card-header">Login</div>
                    <div className="card-body">

                        <form onSubmit={this.handleSubmit} className="">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input 
                                    type="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    className="form-control" 
                                    placeholder="Username" id="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input 
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    className="form-control" 
                                    name="email" 
                                    id="email" 
                                    type="email" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter email"/>
                            </div>

                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="password">Password</label>
                                        <input 
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            name="password"
                                            className="form-control"
                                            id="password" 
                                            type="password" 
                                            placeholder="Password" />
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <label htmlFor="ConfirmPassword">Confirm password</label>
                                        <input className="form-control" id="ConfirmPassword" type="password" placeholder="Confirm password" />
                                    </div>
                                    
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Register </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
