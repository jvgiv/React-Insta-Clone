import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes, { string } from "prop-types";
import dummyData from './dummy-data'
import styled, { css } from "styled-components";

const CommentsContainer = styled.div`
    margin: 0 10px;
    line-height: 1.25;
`
const CommentAdd = styled.input`
    width: 580px;
    height: auto;
    align-content: center;
    border-top: 1px solid #e6e6e6;
    border-right: 0;
    border-left: 0;
    border-bottom: 0;
    margin-left: 10px;
    margin-bottom: 15px;
`

class CommentSection extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        comments: props.picSectionComments,
        commentText: ''
    }
}
    


    addNewCommentThisIsAnEventHandler = event => {
        this.setState({
            commentText: event.target.value
        })
    }

    submitComment = event => {
        event.preventDefault();
        // console.log(event);
        const createdVariable = this.state.commentText  
        
        const newComment = {
            id: Date.now(),
            username: '1234',
            text: createdVariable
        }

        // console.log(newComment)
        // 1. take commentText 
        // 2. make new object with comment text, id, username
        // 3. update state with new object for commentText
        this.setState({
            comments: [...this.state.comments, newComment],
            commentText: ''
        })
    }
    

render() {
    // console.log(this.state.comments)
    return (
        <>
            {/* <p><strong>{eachComment.likes} likes</strong></p> */}
            {this.state.comments.map(eachComment => (
                <CommentsContainer key={eachComment.id} className="comments">
                    
                   <p><strong>{eachComment.username}</strong> {eachComment.text}</p>
                   
                </CommentsContainer>
            ))}
            <p>{this.props.timestamp}</p>
            <form onSubmit={this.submitComment}>
                <CommentAdd 
                    className="comment-add"
                    placeholder="Add a comment..."
                    value={this.state.commentText}
                    onChange={this.addNewCommentThisIsAnEventHandler}
                    />
            </form>
        </>
    )
}
 
}





export default CommentSection;



CommentSection.propTypes = {
    id: PropTypes.string,
    username: PropTypes.string,
    text: PropTypes.string
}