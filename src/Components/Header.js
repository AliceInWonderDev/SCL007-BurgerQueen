import React, {Component} from 'react';
import logo from '../Imagenes/logo.png';

class Header extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                        <img src = {logo}/>
                    
                </div>
            </div>
        )
    }
}

export default Header;