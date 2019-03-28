import React from 'react';
import './App.css';
import styled, { css } from "styled-components";

const LogInBox = styled.div`
    width: 600px;
    height: 300px;
    border-radius: 5px;
    background: lightgray;
    margin: 0 auto;
    border: 1px solid black;
    margin-top: 100px;
    box-shadow: 5px 5px 5px #D2D2D2;
`
const LogInHeader = styled.h1`
    display: flex;
    justify-content: center;
`
const LogInForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
`

const LogInInputs = styled.input`
    display: flex;
    margin-bottom: 25px;
    border-radius: 5px;
`

const LogInButton = styled.button`
    display: flex;
    width: 100px;
    // height: auto;
    font-size: 20px;
    margin: 0 auto;
    padding-left: 21px;
    
`


class Login extends React.Component {
    constructor() {
        super();
        
    }




    render() {
        return (
            <LogInBox>
                <LogInHeader>Log In</LogInHeader>
                <LogInForm onSubmit={this.props.submitLoginInfo}>
                    <LogInInputs 
                        value={this.props.dogBanana}
                        placeholder="Username"
                        onChange={this.props.eventHandlerForUsername}
                    />
                    <LogInInputs 
                        value={this.props.dogKiwi}
                        placeholder="Password"
                        type='password'
                        onChange={this.props.eventHandlerForPassword}
                    />
                </LogInForm>
                <LogInButton onClick={this.props.submitLoginInfo}>Log In</LogInButton>
            </LogInBox>
        )
    }
}

export default Login;