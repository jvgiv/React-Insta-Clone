import React, { Component } from 'react';
import './App.css';
import PropTypes, { string } from "prop-types";
import LikesButton from './LikesButton'
import CommentSection from './CommentSection';

function Post(props) {

    
    return (
        <>
            {props.dummyArrayDat.map(picSection => (
                <div className="post-container" key={picSection.id}>
                    <div className="tnail">
                        <img src={picSection.thumbnailUrl} alt="thumbnail" className="tnail--pic"/>
                        <p className="tnail--username"><strong>{picSection.username}</strong></p>
                    </div>
                    <div className="post-pic">
                        <img src={picSection.imageUrl} alt="Post" className="post-pic-picture"/>
                    </div>
                    <LikesButton 
                        likesTotal={picSection}
                    />
                    {/* <p className="date-posted">{picSection.timestamp}</p> */}
                    <CommentSection 
                        picSectionComments={picSection.comments}   
                    />
                    {/* <p className="date-posted">{picSection.timestamp}</p> */}
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