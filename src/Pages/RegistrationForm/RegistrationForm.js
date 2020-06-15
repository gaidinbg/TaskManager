import React, { Component } from 'react';

import'../../style.css';
import '../../coming-soon.css';
import {Redirect} from "react-router-dom";

import SharedLogin from "../../components/SharedLogin/SharedLogin";

export default class RegistrationForm extends Component {

    state = {
        id: 1,
        name : "",
        email:'',
        password: '',
        confirmPassword: '',
        role : 'nonAdmin',
        redirect: false
    }

   
    handleChange = (event) => {
        const input = event.target;
        const value = input.value.trim();
     
        this.setState({ [input.id]: value });
      };
   
      saveToStorage=()=> {


        var userData = JSON.parse(localStorage.getItem('userdata'));

        if(!userData)
        {
          userData = [];

          let admin  = {
            id: 1,
            name : "Admin Admin",
            email:'petko@admin.com',
            password: '1234',
            confirmPassword: '1234',
            role : 'admin',
            redirect: false
          }

          userData.push(admin);
        }
       
        if(userData.length)
        {
          this.state.id = userData[userData.length-1].id + 1;
        }

        if(!SharedLogin.checkUserExists(this.state.email))
        {
          userData.push(this.state);

          localStorage.setItem('userdata',JSON.stringify(userData));
  
          this.setState({redirect:true});    
        }
        else
        {

          alert('User Already Exists');

        }
        
   
      }
     

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        if(!!(this.state.password) && this.state.password === this.state.confirmPassword) {
          this.saveToStorage();
       

        } else {
            alert('Passwords empty or do not match');

        }
      }

      
    handleFormReset = (event) => {
        
      localStorage.clear();
      }


    render() { 

        if (this.state.redirect === true) {
            return <Redirect to='/' />
          }

        return(
        

<div class="container my-container">
    
    <video class="body_bg" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="../src/mp4/videoplayback" type="video/mp4"/>
  </video>
    <div class="row">
        <div class="col-md-5 mx-auto">

            <div class="myform form col-md-5 mx-auto">
                
                
                 <form>
                <div class="logo mb-3">
                    <div class="col-md-12 text-center">
                        <h1>Sign Up</h1>
                    </div>
      
                        <label  htmlFor="name" className="label label-primary h4 "> Name:  </label>
                            <input type="text" id="name" className="form-control input-group" value={this.state.username} onChange={this.handleChange} placeholder="Choose username"/>
                       
                        <label htmlFor="email" className="label label-primary h4 ">   Email:</label>
                           <input type="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange} placeholder="Enter E-mail"/>
                        
                        <label htmlFor="password" className="label label-primary h4 "> Password: </label>
                            <input type="password" id="password" className="form-control" value={this.state.password} onChange={this.handleChange} placeholder="Set Password"/>
                       
                        <label htmlFor="confirmPassword" className="label label-primary h4 ">Confirm Password: </label>
                             <input type="password" id="confirmPassword" className="form-control" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="Confirm Password"/>
                       
                    
                     

                <button class="btn btn-block mybtn btn-success tx-tfm" type = "submit" onClick={this.handleFormSubmit}>Register</button>
                    <div class="form-group my-form-group">
                        <p class="text-center"><a href="" onClick={this.handleFormReset}>Return Home</a></p>
                    </div>
                

               </div>
               </form>
            </div>
        </div>
    </div>
 </div>



            )      
     }
  }
