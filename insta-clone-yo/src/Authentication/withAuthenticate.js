import React from 'react';
import Login from '../Login'



const withAuthenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
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
      console.log(event.target.value);
      this.setState({
          password: event.target.value
      })
  }

  submitLoginInfo = event => {
      event.preventDefault();
      console.log('hello');
      const createdUsername = this.state.username;
      const createdPassword = this.state.password;
      
      const newLogin = {
          username: createdUsername,
          text: createdPassword
      }

    
      

      // console.log(newComment)
      // 1. take commentText 
      // 2. make new object with comment text, id, username
      // 3. update state with new object for commentText
      this.setState({
          loggedIn: !this.state.loggedIn
      })
      
  }

    render() {
      // console.log(typeof localStorage.getItem('loggedIn'))
      if(this.state.loggedIn) {
        return <App />
      }
      return <Login 
                eventHandlerForUsername={this.eventHandlerForUsername}
                eventHandlerForPassword={this.eventHandlerForPassword}
                submitLoginInfo={this.submitLoginInfo}
                dogBanana={this.state.username}
                dogKiwi={this.state.password}
              />;
    }
  };

  export default withAuthenticate;