import React, { Component } from 'react'
import { connect } from "react-redux";
import { FILE_UPLOAD, MEAL_URI } from "../constants";
import "./css/addmeal.css"
import { API } from '../api';

class MealEdit extends Component {
  state = {
    meal:{
        name:"",
        price:"",
        photo_url:""
    },
    loading:false,
    error:null
  }

  componentWillMount(){
      this.setState({loading:true})
      const meal_id = this.props.match.params.id
      let service = new API()
      service.api(MEAL_URI+"/"+meal_id).then(res => {
          this.setState({meal:res, loading:false})
      }).catch(err => {
        this.setState({error:err, loading:false})
      })
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const meal_id = this.props.match.params.id

    let service = new API()
    service.api(MEAL_URI+"/"+meal_id, {
        method:"PUT",
        body:JSON.stringify(this.state)
    }).then(res => {
        this.props.history.push("/d")
    })
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
    if(this.state.loading){
        return (
            <div>
                loading....
            </div>
        )
    }
    if(this.state.error){
        if(this.state.error.response.status === 404){
              
        return (
            <div>
               404
            </div>
        )
        }

        return (
            <div>
                Someerror happend
            </div>
        )
    }

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="name" 
          className="form-control" 
          id="name"
          value={this.state.meal.name} 
          onChange={this.handleChange}
          aria-describedby="name" 
          name="name"
          placeholder="Enter meal"/>
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input type="number" 
          className="form-control" 
          value={this.state.meal.price} 
          onChange={this.handleChange}
          id="price" 
          name="price"
          placeholder="Price"/>
      </div>
      <div className="img">
        <img src={this.state.meal.photo_url} alt="" className="rounded-circle" />
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


  

export default connect()(MealEdit)

