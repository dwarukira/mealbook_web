import React, { Component } from 'react'
import { connect } from "react-redux";
import { addMeal } from '../actions/meals';
import { FILE_UPLOAD } from "../constants";

class AddMeal extends Component {
  state = {
    name:"",
    price:10,
    photo_url:""
  }

  componentWillMount(){

  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(addMeal(this.state))
  }

  uploadfiles = e => {                                  
    const data = new FormData()                                       
    data.append('upload', e.target.files[0], e.target.files[0].name)  
    fetch(FILE_UPLOAD, {                                             
        method:'POST',                                                
        body:data                                                     
    }).then(res => {                                                  
        return res.json().then(data =>{                                                                               
            this.setState({photo_url:data.url})                       
        })                                                            
    }).catch(err => {                                                 
       console.log(err);                                      
    })                                                                
                                                                      
}   
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            <input type="number" name="price" value={this.state.price} onChange={this.handleChange}/>
            <input type="file" name="photo" onChange={this.uploadfiles}/>
            <img src={this.state.photo_url} alt=""/> <br/>
            <input type="submit"/>            
        </form>
      </div>
    )
  }
}



export default connect()(AddMeal)

