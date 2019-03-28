import React, { Component } from 'react';
import './App.css';
import PropTypes, { string } from "prop-types";
import LikesButton from './LikesButton'
import CommentSection from './CommentSection';
import styled, { css } from "styled-components";



const PostContainer = styled.div``

const TNail = styled.div`
    border-top: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    width: auto;
`
const TNailPic = styled.img`
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin-left: 10px;
`

const TNailUsername = styled.p`
    align-items: center;
    padding-left: 10px;
`

const PostPic = styled.img`
    width: 600px;
    display: flex;
`

function Post(props) {

    
    return (
        <>
            {props.dummyArrayDat.map(picSection => (
                <PostContainer className="post-container" key={picSection.id}>
                    <TNail className="tnail">
                        <TNailPic src={picSection.thumbnailUrl} alt="thumbnail" className="tnail--pic"/>
                        <TNailUsername className="tnail--username"><strong>{picSection.username}</strong></TNailUsername>
                    </TNail>
                    <div className="post-pic">
                        <PostPic src={picSection.imageUrl} alt="Post" className="post-pic-picture"/>
                    </div>
                    <LikesButton 
                        likesTotal={picSection}
                    />
                    {/* <p className="date-posted">{picSection.timestamp}</p> */}
                    <CommentSection 
                        picSectionComments={picSection.comments}   
                    />
                    {/* <p className="date-posted">{picSection.timestamp}</p> */}
                </PostContainer>
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