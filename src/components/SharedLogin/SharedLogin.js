import { React, Component } from 'react';


export default class SharedLogin extends Component {

    
  static checkUserLogin=(email,password)=> {


      let loggedUser = null; 
      if(loggedUser = this.checkUserExists(email) )
      {
        if(loggedUser.password == password)
        {
          localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
          return loggedUser;
        }
        else
        {
          alert('User or Password do not match');
        }
      }
      else
      {
        alert('User or Password do not match');
      }
      
      return false;
  
    }

    static checkUserExists = (email) =>
    {
      
      var userData = JSON.parse(localStorage.getItem('userdata'));

      if(userData)
      {
        for(let i=0; i<userData.length; i++)
        {
          if(userData[i].email == email)
          {
            return userData[i];
          }
        }
      }
      return false;
    }

    static getUserById = (userId) =>
    {
      var userData = JSON.parse(localStorage.getItem('userdata'));

      if(userData)
      {
        for(let i=0; i<userData.length; i++)
        {
          if(userData[i].id == userId)
          {
            return userData[i];
          }
        }
      }
      return false;
    }


    static verifyUserLogin = () =>
    {
      let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

      if(loggedUser)
      {
        return loggedUser;
      }
      else
      {
        return false;
      }
    }


   
}
