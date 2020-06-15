import React, { Component } from 'react';
import SharedLogin from "../../components/SharedLogin/SharedLogin";

import { Redirect } from 'react-router-dom';


import'../../style.css';
import '../../coming-soon.css';

export default class Login extends Component {
  
  state = {
   
    user : {},
    redirect: false
}

props = null;


componentWillMount() {  

  var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

  if(loggedUser.id) //already logged
        {
      alert('Already logged');
      this.setState({redirect:true});
  }
}

   
    handleChange = (event) => {
        const input = event.target;
        const value = input.value;
     
        this.setState({ [input.id]: value });
      };

     
    

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        if(SharedLogin.checkUserLogin(this.state.email, this.state.password))
        {
          this.setState({redirect:true});    
        }
      }



    render() { 
        if (this.state.redirect) {
            return <Redirect to='/users' />
          }

        return(
        

<div class="container my-container">
    
    <video class="body_bg" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="../src/mp4/videoplayback" type="video/mp4"/>
  </video>
    <div class="row">
        <div class="col-md-5 mx-auto">

            <div class="myform form col-md-5 mx-auto">
                
                    {/* Here should I check whether the user is already registered?/logged?
                     <div class="mb-3">
                        <div class="alert alert-info">   You are logged in as {{ app.user.username }}, <a href="{{ path('app_logout') }}">Logout</a> </div>

                    </div>
                 */}
                 <form>
                <div class="logo mb-3">
                    <div class="col-md-12 text-center">
                        <h1>Sign Up</h1>
                    </div>
      
                        
                        <label htmlFor="email" className="label label-primary h4 ">   Email:</label>
                           <input type="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange} placeholder="Enter E-mail"/>
                        
                        <label htmlFor="password" className="label label-primary h4 "> Password: </label>
                            <input type="password" id="password" className="form-control" value={this.state.password} onChange={this.handleChange} placeholder="Set Password"/>
                       
                    

                     

                <button class="btn btn-block mybtn btn-success tx-tfm" type = "submit" onClick={this.handleFormSubmit}>Login</button>
                
                

               </div>
               </form>
            </div>
        </div>
    </div>
 </div>



            )      
     }
  }
