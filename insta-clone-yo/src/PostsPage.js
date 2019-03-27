import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './SearchBar';
import Post from './Post';
// import CommentSection from './CommentSection';

class PostsPage extends React.Component {
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
        // console.log(this.state.dummyArrayDat)
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

export default PostsPage