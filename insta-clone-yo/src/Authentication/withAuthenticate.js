import React from 'react';
import Login from '../Login'



const withAuthenticate = App =>
  class extends React.Component {
    render() {
      if(localStorage.getItem('loggedIn')) {
        return <App />
      }
      return <Login />;
    }
  };

  export default withAuthenticate;