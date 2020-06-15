import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



export default class DeleteUser extends Component {
    
    constructor(props) {
      super(props);

     var userData = JSON.parse(localStorage.getItem('userdata'));
     var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

      // we cycle all the users from the storage
      for(let i=0; i<userData.length; i++)
      {
        // if we match the user ID we need to delete to some from the storage, and they are not admin, and the logged user has admin rights
        if(userData[i].id == props.match.params.id && 
              (   
                  (userData[i].role !='admin' && loggedUser.role == 'admin' )
                   
                  || (userData[i].id == loggedUser.id) 
              )
        )
        {
         
            var taskData = JSON.parse(localStorage.getItem('taskdata'));
          
            if(taskData)
            {
            // we cycle all the tasks from the storage
            for(let j=0; j<taskData.length; j++)
            {
              
              if(taskData[j].user.id == userData[i].id) 
              {
                taskData.splice(j, 1); // remove 1 element at position j;
                j--;
              }
            }

            localStorage.setItem('taskdata',JSON.stringify(taskData)); // save the task data to the local storage

            }


            
          userData.splice(i, 1); // remove 1 element at position i;
          localStorage.setItem('userdata',JSON.stringify(userData)); // save the user data to the local storage
 
          

          // we need to recursively delete the tasks of the user
        }
      }
     
    }

    render() { 
          return <Redirect to='/users'/>

    }

  }