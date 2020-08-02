import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import Modal from 'react-modal';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import inputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';


import './Header.css';
import InputLabel from '@material-ui/core/InputLabel';


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

const tabContainer = function(props){
    return (
        <Typography component="div" style={{adding:0, textAlign:"center"}}>
            {props.children}
        </Typography>
    );    
}

tabContainer.propTypes={
    children:PropTypes.node.isRequired
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
                <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label="Login"/>
                    <Tab label="Register"/>
                </Tabs>
                {this.state.value===0 &&
                <tabContainer>
                    <FormControl required>
                        <inputLabel htmlFor="userName">Username</inputLabel>
                        <Input id="username" type="text"/>
                    </FormControl>
                    <br /><br />
                    <FormControl required>
                        <inputLabel htmlFor="password">Password</inputLabel>
                        <Input id="password" type="password"/>
                    </FormControl>
                    <br /><br />
                    <Button variant="contained" color="primary">Login</Button>
                 </tabContainer>}
                </Modal>
            </div>

        )
    }
}

export default Header