import React, { Component } from 'react'
import { API } from "../api"
import styles from "./css/login.css"
export class Login extends Component {
    
    state = {
        username:"",
        password:"",
        error:null
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})      
        console.log(this.state);
          
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let api = new API()
        api.login(this.state).then(res => {
            this.props.history.push("/")
        }).catch(err => {
            if(err.response){
                err.response.json().then(message => {
                    this.setState({error:message})
                })
            }
        })
    }

    
    render() {
        return (
            <div className={`${styles.login_container}`}>
            <div className={`${styles.login_card}`}>
                <h3 className={styles.login_card__heading}> Welcome back to meal book </h3>

                <div className={styles.form}>
                    <div className={styles.login_image}>

                    </div>

                    <div className={styles.login_form}>
                        <form onSubmit={this.handleSubmit}> 
                        <h3 className={styles.login_h3}> Hi. nice to see you! </h3>
                        <div className="field ">
                            <label className="label">Username</label>
                            <div className="control has-icons-left">
                                <input className="input is-primary" 
                                    onChange={this.handleChange} 
                                    name="username" 
                                    value={this.state.username} 
                                    type="username" 
                                    placeholder="Username" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>


                        <div className="field ">
                            <label className="label">Password</label>
                            <div className="control has-icons-left">
                                <input className="input is-primary" 
                                    onChange={this.handleChange} 
                                    name="password" 
                                    value={this.state.password} 
                                    type="password" 
                                    placeholder="Password" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <p className="control">
                                <button className="button is-success" type="submit">Login</button>
                            </p>
                        </div>
                        </form>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}

export default Login
