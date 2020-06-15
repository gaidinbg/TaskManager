import React, { Component } from 'react';

import'../../style.css';
import '../../coming-soon.css';
import '../../edittask.css';

import {Redirect} from "react-router-dom";


export default class EditTask extends Component {

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
    }  


    componentDidMount()
    {
        
        var taskData = JSON.parse(localStorage.getItem('taskdata'));
        var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

        // we cycle all the users from the storage
        for(let i=0; i<taskData.length; i++)
        {
            // if we match the user ID we need to delete to some from the storage, and they are not admin, and the logged user has admin rights
            if(taskData[i].id == this.props.match.params.id && 
                (   
                    ( loggedUser.role == 'admin' ) || (taskData[i].user.id == loggedUser.id) 
                )
            )
            {
                this.setState(taskData[i]);
                break;
            }
            else
            {
                this.setState({ redirect: true });
                
            }
        }


        
       
    }

    handleChange = (event) => {
        const input = event.target;
        const value = input.value;
     
        this.setState({ [input.id]: value });
      };
   

    saveToStorage=()=> {


        var taskData = JSON.parse(localStorage.getItem('taskdata'));


        for(let i=0; i<taskData.length; i++)
        {
            if(taskData[i].id == this.state.id)
            {
                taskData[i] = this.state;

                localStorage.setItem('taskdata',JSON.stringify(taskData));
                
                this.setState({redirect:true});    

                break;
            }

         
        }
     
      }
     

    handleFormSubmit = (event) => {
        event.preventDefault();
         
          this.saveToStorage();
       

      }

       myFunction =() => {
        let popup = document.getElementById("myPopup");
       popup.classList.toggle("show");
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
                
                    {/* Here should I check whether the user is already registered?/logged?
                     <div class="mb-3">
                        <div class="alert alert-info">   You are logged in as {{ app.user.username }}, <a href="{{ path('app_logout') }}">Logout</a> </div>

                    </div>
                 */}
                 <form>
                <div class="logo mb-3">
                    <div class="col-md-12 text-center">
                    <h1>Edit Task</h1>
                    </div>
      
                        <label  htmlFor="title" className="label label-primary h4 "> Title:  </label>
                        <input type="text" id="title" className="form-control " value={this.state.title} onChange={this.handleChange} placeholder="Set Task Title"/>

                        <label  htmlFor="description" className="label label-primary h4 "> Description:  </label>
                        <input type="text" id="description" className="form-control " value={this.state.description} onChange={this.handleChange} placeholder="Set Task Description"/>
                       
                        <label  htmlFor="estimate" className="label label-primary h4 label_estimate"> Estimate:  </label>
                       <div className = "field_apend"> <input type="text" id="estimate" className="form-control " value={this.state.estimate} onChange={this.handleChange} placeholder="Set Task Estimation"/>
                        <span class="input-group-append apend_hour " onClick={this.myFunction}>
                      

                        <span class="input-group-text">
                        <span class="popuptext" id="myPopup">A Simple Popup!</span>
                            <span class="fa fa-hourglass"></span>
                        </span>
                        </span>

                        </div>

                        <label  htmlFor="owner" className="label label-primary h4 "> Owner:  </label>
                        <input type="text" id="owner" className="form-control " value={this.state.user.name} onChange={this.handleChange} readOnly/>
                       
                        <label  htmlFor="status" className="label label-primary h4 "> Status:  </label>
                        <select  id="status" className="form-control " value={this.state.status} onChange={this.handleChange} placeholder="Choose Task Status">
                            <option value="pending">Pending</option>
                            <option value="done">Done</option>
                        </select>
                       


                <button class="btn btn-block mybtn btn-success tx-tfm" type = "submit" onClick={this.handleFormSubmit}>Edit Task</button>
                   
                

               </div>
               </form>
            </div>
        </div>
    </div>
 </div>



            )      
     }
  }
