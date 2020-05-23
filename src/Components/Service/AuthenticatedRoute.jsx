import React, { Component } from 'react'
import AuthService from './AuthenticationService'
import { Route, Redirect } from 'react-router-dom'

class AuthenticatedRoute extends Component{
    render(){
      if(AuthService.isUserLoggedIn()){
         return <Route {...this.props}/>
      }  
      else{
        return  <Redirect to="/login"/>
      }
    }
}

export default AuthenticatedRoute