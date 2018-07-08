import { TOKEN, SIGNUP_URI, LOGIN_URI } from "./constants"
import  jwt from "jsonwebtoken";

// Provides an api abstraction for mealbook 
export class API{
    get token(){
        return localStorage.getItem(TOKEN)
    }

    set token(token){    
        localStorage.setItem(TOKEN, token)
    }

    // Check if logged in
    loggedIn(){
        // TODO: check if token is experied
        const token = this.token
        console.log(jwt.decode(token))
        return !!token
    }

    isAdmin(){
        const token = this.token
        if(this.loggedIn()){
            const role = jwt.decode(token).identity.role
            if(role === "SuperAdmin" || role === "Admin"){
                return true
            }
                return false
        }
        return false
    }
    api(url, options){
        // Add headers to fetch 
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // Check if logged in 
        if(this.loggedIn()){
            // set Authorization header to jwt token
            headers['Authorization'] = 'Bearer ' +  this.token
        }

        // call api with fetch, expects json response
        return fetch(url , {
            headers,
            ...options
        })
        .then(this._checkStatus)
        .then(res => res.json())
    }



    _checkStatus(res){
        // okay
        if(res.status >= 200 && res.status < 300){
            return res
        } else{
            // bad 
            var error = new Error(res.statusText)
            error.response = res
            throw error
        }
    }


    signup(data){
        return this.api(SIGNUP_URI,{
            method:'POST',
            body:JSON.stringify(data)
        }).then(res => {
            this.token = res.token
            return Promise.resolve(res)
        })
    }

    login(data){
        return this.api(LOGIN_URI,{
            method:'POST',
            body:JSON.stringify(data)
        }).then(res => {
            console.log(res);
            
            this.token = res.token     
            return Promise.resolve(res)
        })
    }
}
