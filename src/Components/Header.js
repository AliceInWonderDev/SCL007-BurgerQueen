import React, {Component} from 'react';
import logo from '../Imagenes/logo.png';

class Header extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <img src = {logo}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;