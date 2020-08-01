import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'

import './Header.css';

class Header extends Component{
    render(){
        return (
            <div className="login-header">
                <img src={logo} className="app-logo" alt="logo"/>
                <Button variant="contained" color="default" className="login-button">Login</Button>
            </div>

        )
    }
}

export default Header