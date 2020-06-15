import React, { Component } from 'react';

import'../../style.css';
import '../../coming-soon.css';
import {Redirect} from "react-router-dom";

import SharedLogin from "../../components/SharedLogin/SharedLogin";

export default class EditUser extends Component {

    state = {
        id: 1,
        name : "",
        email:'',
        password: '',
        confirmPassword: '',
        role : 'nonAdmin',
        redirect: false
    }
    
    props = null;

    constructor(props) {
        super(props);
        this.props = props;

    }  


    componentDidMount()
    {
        
        this.setState( SharedLogin.getUserById(this.props.match.params.id));
    
    }
     
    redirectBack = () =>
    {
        
        this.setState({redirect:true}); 
    }



    render() { 

        if (this.state.redirect === true) {
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
                        <h1>Edit User</h1>
                    </div>
      
                        <label  htmlFor="name" className="label label-primary h4 "> Name:  </label>
                            <input type="text" id="name" className="form-control " value={this.state.name} onChange={this.handleChange} placeholder="Choose username"/>
                       
                        <label htmlFor="email" className="label label-primary h4 ">   Email:</label>
                           <input type="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange} placeholder="Enter E-mail"/>
                        
                        <label htmlFor="password" className="label label-primary h4 "> Password: </label>
                            <input type="password" id="password" className="form-control" value={this.state.password} onChange={this.handleChange} placeholder="Set Password"/>
                       
                        <label htmlFor="confirmPassword" className="label label-primary h4 ">Confirm Password: </label>
                             <input type="password" id="confirmPassword" className="form-control" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="Confirm Password"/>
                       
                     
                        <input type="text" hidden id="id" value={this.state.id} onChange={this.handleChange}/>
                        <input type="text" hidden id="role" value={this.state.role} onChange={this.handleChange}/>

                     

                <button class="btn btn-block mybtn btn-success tx-tfm" type = "submit" onClick={this.redirectBack}>Go Back</button>
                   
                

               </div>
               </form>
            </div>
        </div>
    </div>
 </div>



            )      
     }
  }
