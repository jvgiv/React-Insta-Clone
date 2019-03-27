import React, { Component } from 'react';
import './App.css';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }


    eventHandlerForUsername = event => {
        // console.log(event.target.value);
        this.setState({
            username: event.target.value,
        })
    }


    eventHandlerForPassword = event => {
        // console.log(event.target.value);
        this.setState({
            password: event.target.value
        })
    }

    submitLoginInfo = event => {
        event.preventDefault();
        console.log(event.target);
        const createdUsername = this.state.username;
        const createdPassword = this.state.password;
        
        const newLogin = {
            id: Date.now(),
            username: createdUsername,
            text: createdPassword
        }

        // console.log(newComment)
        // 1. take commentText 
        // 2. make new object with comment text, id, username
        // 3. update state with new object for commentText
        // this.setState({
        //     comments: [...this.state.comments, newComment],
        //     commentText: ''
        // })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitLoginInfo}>
                    <input 
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.eventHandlerForUsername}
                    />
                    <input 
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.eventHandlerForPassword}
                    />
                </form>
                <button Submit={this.submitLoginInfo}>Log In</button>
            </div>
        )
    }
}

export default Login;