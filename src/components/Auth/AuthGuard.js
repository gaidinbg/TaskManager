import React from 'react';
import { Redirect } from 'react-router-dom';


import SharedLogin from "../../components/SharedLogin/SharedLogin";

export default function( Component ) {
    
  const AuthGuard = props => {
      
    return (
        <div>
          {SharedLogin.verifyUserLogin() ? (
            <Component {...props}/>
          ) : (
            <Redirect to="/login" />
          )}
        </div>
      );

   };
 
  return (AuthGuard);
}
