
import'../../style.css';
import '../../coming-soon.css';
import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';


const UserRow = (props) => {
    
    const user = props.userInfo;
    let editLink = '';

    let deleteLink = '';

    var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    if(loggedUser.id == user.id || loggedUser.role=='admin') // can edit
    {
        editLink= <button type="button" rel="tooltip" class="btn btn-success btn-just-icon btn-sm" data-original-title="" title="">
        <i class="material-icons"><Link to={`/editUser/${user.id}`}>Edit</Link></i>
                                </button>
    }


    if(loggedUser.id == user.id || loggedUser.role=='admin') // can edit
    {
        deleteLink= <button type="button" rel="tooltip" class="btn btn-danger btn-just-icon btn-sm" data-original-title="" title="">
        <i class="material-icons"><Link to={`/deleteUser/${user.id}`}>Delete</Link></i>
                                </button>
    }
   
    return(
    
            <Fragment>
           
           
                        <tr>
                           
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td class="td-actions text-right">
                                <button type="button" rel="tooltip" class="btn btn-info btn-just-icon btn-sm" data-original-title="" title="">
                                        <i class="material-icons"><Link to={`/viewUser/${user.id}`}>View</Link></i>
                                </button>
                                {editLink}
                                {deleteLink}
                               
                           </td>   
                        </tr>
            </Fragment>


        )      
   
  }


export default UserRow;
