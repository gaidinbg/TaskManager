import React,  { Component } from 'react';

import {BrowserRouter as Router,
        Switch,
        Route,
        Link} from "react-router-dom";

import '../../style.css';

import '../../coming-soon.css';



export default class Home extends Component {

    render() { 
       
  return (
   
    <div className="Home">
        
    <div class="overlay" ></div>
    
    <video class="body_bg" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="../src/mp4/videoplayback" type="video/mp4"/>
  </video>
    <div class="masthead">
        <div class="masthead-bg"></div>
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-12 my-auto">
                    <div class="masthead-content text-white py-5 py-md-0">
                      
                        <h1 class="mb-3">Welcome!</h1>
                        <p class="mb-5">We're working hard to provide you with the best task management system!  
                            <strong><Link to="/registration">Sign up</Link></strong> for updates!
                            Or go to <strong> <Link to="/login">Login section</Link> </strong>to review your profile!</p>

                    </div>
                </div>
            </div>
        </div>
    
    </div>

  

    <div class="social-icons">
        <ul class="list-unstyled text-center mb-0">
            <li class="list-unstyled-item">
                <a href="#">
                    <i class="fab fa-twitter"></i>
                </a>
            </li>
            <li class="list-unstyled-item">
                <a href="#">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </li>
            <li class="list-unstyled-item">
                <a href="#">
                    <i class="fab fa-instagram"></i>
                </a>
            </li>
        </ul>
    </div>
</div>

    
   
 
   
   
  );
}
}
