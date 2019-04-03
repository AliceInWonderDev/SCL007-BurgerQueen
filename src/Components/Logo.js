import React, { Component } from 'react';
import logo from '../Imagenes/logo.png'
import { Link } from 'react-router-dom';
import '../CSS/Logo.css';

class Logo extends Component{
    render(){
        return(
            <div>
                <nav className="navbar">
                    <Link to="/"><img src = {logo} width="100" height="100"  alt="logo"/></Link>
                </nav>
            </div>
            
        )
    }
}
export default Logo;