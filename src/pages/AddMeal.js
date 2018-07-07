import React, { Component } from 'react'
import { connect } from "react-redux";
import { addMeal } from '../actions/meals';
import { FILE_UPLOAD } from "../constants";
import "./css/addmeal.css"

class AddMeal extends Component {
  state = {
    name:"",
    price:"", 
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
    console.log(this.props);
    
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="name" 
          className="form-control" 
          id="name"
          value={this.state.name} 
          onChange={this.handleChange}
          aria-describedby="name" 
          name="name"
          placeholder="Enter meal"/>
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input type="number" 
          className="form-control" 
          value={this.state.price} 
          onChange={this.handleChange}
          id="price" 
          name="price"
          placeholder="Price"/>
      </div>
      <div className="img">
        <img src={this.state.photo_url} alt="" className="rounded-circle" />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo</label>
        <input type="file" 
          className="form-control" 
          name="photo"
          onChange={this.uploadfiles}
          id="password" 
          placeholder="Password"/>
      </div>

      <button type="submit" className="btn btn-primary">Add</button>
    </form>
      </div>
    )
  }
}



export default connect()(AddMeal)

