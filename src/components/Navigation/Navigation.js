import React, { Component, Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import '../Navigation/navigation.css';

export default class Navigation extends Component {
    render (){ 
    return(
        <Fragment>
        <nav id="top_navbar" className="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
            <ul class="menu-bar">

                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/tasks">Tasks</NavLink>
                <NavLink to="/registration">Sign up</NavLink>
                <NavLink to="/login">Login</NavLink>
            </ul>
            </div>
        </nav>
        </Fragment>
    )
}

}
