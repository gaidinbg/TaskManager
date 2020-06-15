import React, { Component } from 'react';

import'../../style.css';
import '../../coming-soon.css';
import {Redirect} from "react-router-dom";
import '../../userlist.css';



export default class AddTask extends Component {

    state = {
        id: 1,
        title : "",
        description:'',
        status: '',
        estimate: '',
        user : {},
        redirect: false
    }
    
    props = null;

    constructor(props) {
        super(props);
        this.props = props;
        
        

        this.state.user = JSON.parse(localStorage.getItem('loggedUser'));

       
        
    }  



    handleChange = (event) => {
        const input = event.target;
        const value = input.value;
     
        this.setState({ [input.id]: value });
      };
   

    saveToStorage=()=> {


        var taskData = JSON.parse(localStorage.getItem('taskdata'));


        if(!taskData)
        {
            taskData = [];
        }
       
        if(taskData.length)
        {
            this.state.id = taskData[taskData.length-1].id + 1;
        }


    
       
        
        taskData.push(this.state);

        localStorage.setItem('taskdata',JSON.stringify(taskData));
  
        this.setState({redirect:true});    
       
   
      }
     

    handleFormSubmit = (event) => {
        event.preventDefault();
         
        //if(!!(this.state.password) && this.state.password === this.state.confirmPassword) {
          this.saveToStorage();
       
/*
        } else {
            alert('Passwords empty or do not match');

        }*/
      }

      
  


    render() { 

        if (this.state.redirect === true) {
            return <Redirect to='/tasks' />
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
                        <h1>Add New Task</h1>
                    </div>
      
                        <label  htmlFor="title" className="label label-primary h4 "> Title:  </label>
                        <input type="text" id="title" className="form-control " value={this.state.title} onChange={this.handleChange} placeholder="Set Task Title"/>

                        <label  htmlFor="description" className="label label-primary h4 "> Description:  </label>
                        <input type="text" id="description" className="form-control " value={this.state.description} onChange={this.handleChange} placeholder="Set Task Description"/>
                       
                        <label  htmlFor="estimate" className="label label-primary h4 "> Estimate:  </label>
                        <input type="text" id="estimate" className="form-control " value={this.state.estimate} onChange={this.handleChange} placeholder="Set Task Estimation"/>
                       
                        <label  htmlFor="owner" className="label label-primary h4 "> Owner:  </label>
                        <input type="text" id="owner" className="form-control " value={this.state.user.name} onChange={this.handleChange} readOnly/>
                       
                        <label  htmlFor="status" className="label label-primary h4 "> Status:  </label>
                        <select  id="status" className="form-control " value={this.state.status} onChange={this.handleChange} placeholder="Choose Task Status">
                            <option value="pending">Pending</option>
                            <option value="done">Done</option>
                        </select>
                       

                <button class="btn btn-block mybtn btn-success tx-tfm" type = "submit" onClick={this.handleFormSubmit}>Add Task</button>
                   
                

               </div>
               </form>
            </div>
        </div>
    </div>
 </div>



            )      
     }
  }
