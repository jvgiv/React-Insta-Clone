import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes, { string } from "prop-types";
import dummyData from './dummy-data'


function CommentSection(props) {
    console.log(props);
    return (
        <>
            {/* <p><strong>{eachComment.likes} likes</strong></p> */}
            {props.picSectionComments.map(eachComment => (
                <div key={eachComment.id} className="comments">
                    
                
                   <p><strong>{eachComment.username}</strong> {eachComment.text}</p>
                   


                </div>
            ))}
            <p>{props.timestamp}</p>
            <input className="comment-add"placeholder="Add a comment..."/>
        </>
    )

}





export default CommentSection;



CommentSection.propTypes = {
    id: PropTypes.string,
    username: PropTypes.string,
    text: PropTypes.string
}