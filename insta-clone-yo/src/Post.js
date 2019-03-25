import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes, { string } from "prop-types";

import CommentSection from './CommentSection';

function Post(props) {
    return (
        <>
            {props.dummyArrayDat.map(picSection => (
                <div>
                    <div>
                        <img src={props.thumbnailUrl} alt="thumbnail" />
                        <p><strong>{picSection.username}</strong></p>
                    </div>
                    <div className="post-pic">
                        <img src={props.imageUrl} alt="Post" />
                    </div>
                    <CommentSection dummyArrayDat={props.dummyArrayDat}/>
                </div>
            ))}
            
        </>
    )
}

export default Post;