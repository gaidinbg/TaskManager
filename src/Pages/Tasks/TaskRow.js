
import'../../style.css';
import '../../coming-soon.css';
import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';


const UserRow = (props) => {
    
    const task = props.taskInfo;
    let editLink = '';

    let deleteLink = '';

    var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    if(loggedUser.id == task.user.id || loggedUser.role=='admin') // can edit
    {
        editLink= <button type="button" rel="tooltip" class="btn btn-success btn-just-icon btn-sm" data-original-title="" title="">
        <i class="material-icons"><Link to={`/editTask/${task.id}`}>Edit</Link></i></button>
    }


    if(loggedUser.id == task.user.id || loggedUser.role=='admin') // can edit
    {
        deleteLink= <button type="button" rel="tooltip" class="btn btn-danger btn-just-icon btn-sm" data-original-title="" title="">
        <i class="material-icons"><Link to={`/deleteTask/${task.id}`}>Delete</Link></i> </button>
    }
    return(
    
            <Fragment>
            <tr>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.estimate}</td>
                <td>{task.user.name}</td>
                <td>{task.status}</td>
                <td class="td-actions text-right">

                        <button type="button" rel="tooltip" class="btn btn-info btn-just-icon btn-sm" data-original-title="" title="">
                                <i class="material-icons"><Link to={`/viewTask/${task.id}`}>View</Link></i>
                        </button>
                        {editLink}
                        {deleteLink}
                </td>
            </tr>
            </Fragment>


        )       
   
  }


export default UserRow;
