import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import Modal from 'react-modal';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import './Header.css';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const tabContainer = function(){
    return {

    }
}

class Header extends Component{

    constructor(){
        super();
        this.state = {
            modalIsOpen:false,
            value:0
        };
    }

    openModalHandler = () => {
        this.setState({modalIsOpen : true})
    }

    closeModalHandler = () => {
        this.setState({modalIsOpen : false})
    }

    tabChangeHandler = (event, value) => {
        this.setState({value});
    }
    render(){
        return (
            <div className="login-header">
                <img src={logo} className="app-logo" alt="logo"/>
                <Button variant="contained" color="default" onClick={this.openModalHandler} className="login-button">Login</Button>
                <Modal ariaHideApp={false} isOpen = {this.state.modalIsOpen} onRequestClose = {this.closeModalHandler} style={customStyles} contentLabel="Login">
                <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label="Login"/>
                    <Tab label="Register"/>
                </Tabs>
                <tabContainer>
                    
                </tabContainer>
                </Modal>
            </div>

        )
    }
}

export default Header