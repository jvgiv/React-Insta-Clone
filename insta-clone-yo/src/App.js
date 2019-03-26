import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './SearchBar';
import Post from './Post';
import CommentSection from './CommentSection';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyArrayDat: []
    }
  }

  componentDidMount() {
    this.setState({
      dummyArrayDat: dummyData
    })
    console.log(this.state.dummyArrayDat)
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Post dummyArrayDat={this.state.dummyArrayDat}/>
        
      </div>
    );
  }
}

export default App;
