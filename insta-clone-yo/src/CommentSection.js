import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes, { string } from "prop-types";
import dummyData from './dummy-data'


function CommentSection(props) {
    console.log(props);
    return (
        <>
            {props.dummyArrayDat.map(listenUp => (
                <div key={listenUp.id} className="comments">
                    {listenUp.comments && listenUp.comments.map(comment => (
                        <p><strong>{comment.username}</strong> {comment.text}</p>
                    ))}


                </div>
            ))}
            <p>{props.timestamp}</p>
        </>
    )

}


















export default CommentSection;