import React from 'react';
import Navigation from '../src/components/Navigation/Navigation';
import RegistrationForm from './Pages/RegistrationForm/RegistrationForm';
import Login from './Pages/Login/Login';


import UserList from './Pages/Users/UserList';
import DeleteUser from './Pages/Users/DeleteUser';
import ViewUser from './Pages/Users/ViewUser';
import EditUser from './Pages/Users/EditUser';


import AddTask from './Pages/Tasks/AddTask';
import TaskBoard from './Pages/Tasks/TaskBoard';
import DeleteTask from './Pages/Tasks/DeleteTask';
import ViewTask from './Pages/Tasks/ViewTask';
import EditTask from './Pages/Tasks/EditTask';

import AuthGuard from './components/Auth/AuthGuard';



import {BrowserRouter as Router,
        Switch,
        Route,
        } from "react-router-dom";

import './style.css';
import './coming-soon.css';
import NotFound from './components/NotFound/NotFound';
import Home from './Pages/Home/Home';
import AddUser from './Pages/Users/AddUser';


function App() {
  return (
    <Router>   
      <div>
          <Navigation/>
          <Switch>
            
            <Route name="Registration"  path="/registration" component={RegistrationForm} />
            <Route name="Login"  path="/login" component={Login} />
            <Route name="Users"  path="/users" component={AuthGuard(UserList)} />
            <Route name="ViewUser"  path="/viewUser/:id" component={AuthGuard(ViewUser)} />
            <Route name="EditUser"  path="/editUser/:id" component={AuthGuard(EditUser)} />
            <Route name="DeleteUser"  path="/deleteUser/:id" component={AuthGuard(DeleteUser)} />
            <Route name="AddIser"  path="/adduser" component={AuthGuard(AddUser)} />



            <Route name="AddTask"  path="/addTask" component={AuthGuard(AddTask)} />
            <Route name="Tasks"  path="/tasks" component={AuthGuard(TaskBoard)} />
            <Route name="ViewTask"  path="/viewTask/:id" component={AuthGuard(ViewTask)} />
            <Route name="EditTask"  path="/editTask/:id" component={AuthGuard(EditTask)} />
            <Route name="DeleteTask"  path="/deleteTask/:id" component={AuthGuard(DeleteTask)} />

          

            <Route name="Home" exact  path="/" component={Home} />
            <Route  component={NotFound} />
          </Switch>
      </div>
 </Router>
   
  );
}

export default App;
