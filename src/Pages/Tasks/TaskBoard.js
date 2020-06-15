import React, { Component } from 'react';
import TaskRow from "./TaskRow";


import'../../style.css';
import '../../coming-soon.css';
import '../../userlist.css';
import { Redirect } from 'react-router-dom';

export default class TaskBoard extends Component {
    

    taskRows = [];
    
    state = {
    
        redirect: false
    }
 
    componentWillMount() {  

        let tasks = JSON.parse(localStorage.getItem('taskdata'));
     
        if(tasks)
        {
            for(let i=0; i<tasks.length; i++)
            {
            this.taskRows.push(
                <TaskRow
                taskInfo={tasks[i]}   
                />
            );
            }
        }
    }
    redirectNew = () =>
    {
        
        this.setState({redirect:true}); 
    }

    render() { 

        if (this.state.redirect === true) {
            return <Redirect to='/addTask' />
          }
        
        
        return(
        

            <div className="container my-container">
                    <video class="body_bg" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src="../src/mp4/videoplayback" type="video/mp4"/>
                    </video>
                      <div class="row">
                          <div class="col-md-12 mx-auto">

                              <div class="myform form col-md-12 mx-auto">
                
                                    <div class="table-responsive">
                                      <table class="table">
                                      <thead>
                                                    <tr>
                                                      
                                                      <th>#id</th>
                                                      <th>Title</th>
                                                      <th>Description</th>
                                                      <th>Estimation</th>
                                                      <th>Owner</th>
                                                      <th>Status</th>
                                                      <th class="text-center">Actions</th>
                                                  </tr>
                                      </thead>

                                      <tbody>  
                                            {this.taskRows}
                                      </tbody>

                                      </table>
                                      
                                      </div>

                                </div>
                                <button class="btn btn-block mybtn btn-success tx-tfm" type = "submit" onClick={this.redirectNew}>Add Task</button>

                            </div>
                        </div>
                   </div>


            )      
     }
  }