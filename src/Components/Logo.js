import React, { Component } from 'react';
import logo from '../Imagenes/logo.png'
import '../CSS/Logo.css';

class Logo extends Component{
    render(){
        return(
            <div>
                <nav className="navbar">
                    <a class="navbar-brand" href="#">
                    <img src = {logo} width="40" height="40" class="d-inline-block align-top" alt="logo"/>Burguer Queen</a> 
                </nav>
            </div>
            
        )
    }
}
export default Logo;