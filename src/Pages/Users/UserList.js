import React, { Component } from 'react';
import UserRow from "./UserRow";

import '../../style.css';
import '../../coming-soon.css';
import '../../userlist.css';
import { Redirect, Link } from 'react-router-dom';
import SharedLogin from '../../components/SharedLogin/SharedLogin';
import AddUser from './AddUser';


export default class UserList extends Component {
   
  addLink ='';


  
  state = {
 
    redirect: false
}

    userRows = [];
 
    componentWillMount() {  
      let addLink ='';


        let users = JSON.parse(localStorage.getItem('userdata'));

     
        for(let i=0; i<users.length; i++)
        {
          this.userRows.push(
            <UserRow
              userInfo={users[i]}   
            />
          );
        }

        var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        if(loggedUser.role==='admin') // can add
        {
            this.addLink = <button class="btn btn-block mybtn btn-success tx-tfm" > <Link to={'/adduser'}>Add User </Link> </button>
            
        }

    }
    redirectNew = () =>
    {
        
        this.setState({redirect:true}); 
    }

    

    render() { 

      if (this.state.redirect === true) {
        return <Redirect to='/adduser' />
      }
      

        return(
    
    

                <div className="container my-container">
                    <video class="body_bg" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src="../src/mp4/videoplayback" type="video/mp4"/>
                    </video>
                      <div class="row">
                          <div class="col-md-9 mx-auto">

                              <div class="myform form col-md-9 mx-auto">
                
                                    <div class="table-responsive">
                                      <table class="table">
                                      <thead>
                                                  <tr>
                                                      
                                                      <th>#id</th>
                                                      <th>Name</th>
                                                      <th>E-mail</th>
                                                      <th class="text-right">Actions</th>
                                                  </tr>
                                      </thead>

                                      <tbody>           
                                            {this.userRows}
                                      </tbody>

                                    </table>
                                    </div>
                                
                               </div>
                               {this.addLink}


                           </div>
                       </div>
                  </div>

            )      
     }
  }