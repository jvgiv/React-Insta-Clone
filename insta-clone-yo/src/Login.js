import React from 'react';
import './App.css';


class Login extends React.Component {
    constructor() {
        super();
        
    }

    

    


    render() {
        return (
            <div>
                <form onSubmit={this.props.submitLoginInfo}>
                    <input 
                        value={this.props.dogBanana}
                        placeholder="Username"
                        onChange={this.props.eventHandlerForUsername}
                    />
                    <input 
                        value={this.props.dogKiwi}
                        placeholder="Password"
                        onChange={this.props.eventHandlerForPassword}
                    />
                </form>
                <button onClick={this.props.submitLoginInfo}>Log In</button>
            </div>
        )
    }
}

export default Login;