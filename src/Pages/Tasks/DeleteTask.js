import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



export default class DeleteTask extends Component {
    
    constructor(props) {
      super(props);

     var taskData = JSON.parse(localStorage.getItem('taskdata'));
     var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

      // we cycle all the users from the storage
      for(let i=0; i<taskData.length; i++)
      {
        // if we match the user ID we need to delete to some from the storage, and they are not admin, and the logged user has admin rights
        if(taskData[i].id == props.match.params.id && 
              (   
                   loggedUser.role == 'admin' || (taskData[i].user.id == loggedUser.id) 
              )
        )
        {
          taskData.splice(i, 1); // remove 1 element at position i;
          localStorage.setItem('taskdata',JSON.stringify(taskData)); // save the user data to the local storage

        }
      }
     
    }

    render() { 
          return <Redirect to='/tasks'/>

    }

  }