import React from 'react';

import './App.css';
import PostsPage from './PostsPage'
import withAuthenticate from './Authentication/withAuthenticate';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
  // state = {
  //   loggedIn: true
  // };

  // toggleComponents = () => {
  //   if(!this.state.loggedIn) {
  //     localStorage.setItem('loggedIn', true)
  //   } else {
  //     localStorage.removeItem('loggedIn')
  //   }
  //   this.setState({ loggedIn: !this.state.loggedIn })
  // }

  render() {
    return (
      <ComponentFromWithAuthenticate />
    );
  }
}

export default App;
