import React, { Component } from 'react';

import'../../style.css';
import '../../coming-soon.css';
import {Redirect} from "react-router-dom";


export default class ViewTask extends Component {

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

        // we cycle all the task from the storage
        for(let i=0; i<taskData.length; i++)
        {
            if(taskData[i].id == this.props.match.params.id)
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
     
    redirectBack = () =>
    {
        
        this.setState({redirect:true}); 
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
                    <h1> Task Overview</h1>
                    </div>
      
                        <label  htmlFor="title" className="label label-primary h4 "> Title:  </label>
                        <input type="text" id="title" className="form-control " value={this.state.title} onChange={this.handleChange} placeholder="Set Task Title" readOnly/>

                        <label  htmlFor="description" className="label label-primary h4 "> Description:  </label>
                        <input type="text" id="description" className="form-control " value={this.state.description} onChange={this.handleChange} readOnly placeholder="Set Task Description"/>
                       
                        <label  htmlFor="estimate" className="label label-primary h4 "> Estimate:  </label>
                        <input type="text" id="estimate" className="form-control " value={this.state.estimate} onChange={this.handleChange} readOnly placeholder="Set Task Estimation"/>
                       
                        <label  htmlFor="owner" className="label label-primary h4 "> Owner:  </label>
                        <input type="text" id="owner" className="form-control " value={this.state.user.name} onChange={this.handleChange} readOnly/>
                       
                        <label  htmlFor="status" className="label label-primary h4 "> Status:  </label>
                        <select  id="status" className="form-control " value={this.state.status} onChange={this.handleChange} disabled placeholder="Choose Task Status">
                            <option value="pending">Pending</option>
                            <option value="done">Done</option>
                        </select>
                       

                     

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
