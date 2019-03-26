import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes, { string } from "prop-types";

import CommentSection from './CommentSection';

function Post(props) {
    return (
        <>
            {props.dummyArrayDat.map(picSection => (
                <div key={picSection.id}>
                    <div className="tnail">
                        <img src={picSection.thumbnailUrl} alt="thumbnail" className="tnail--pic"/>
                        <p className="tnail--username"><strong>{picSection.username}</strong></p>
                    </div>
                    <div className="post-pic">
                        <img src={picSection.imageUrl} alt="Post" className="post-pic-picture"/>
                    </div>
                    <div className="like-logos">
                        <i class="far fa-heart"></i>
                        <i class="far fa-comment like-logo-second"></i>
                    </div>
                    <div>
                        <p className="likes"><strong>{picSection.likes} likes</strong></p>
                    </div>
                    <CommentSection picSectionComments={picSection.comments}/>
                </div>
            ))}
            
        </>
    )
}


export default Post;



CommentSection.propTypes = {
    dummyArrayDat: PropTypes.arrayOf(PropTypes.shape(
        {
        id: PropTypes.string,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
            text: PropTypes.string
        
        }))}
    ))
}