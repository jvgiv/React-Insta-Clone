import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes, { string } from "prop-types";
import dummyData from './dummy-data'
import styled, { css } from "styled-components";

const LikeLogos = styled.div`
    font-size: 25px;
    margin-left: 10px;
    height: 40px;
`
const Likes = styled.p`
    
    font-size: 17px;
`

class LikesButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likesTotal: 0,
            isItLiked: false

        }
    }

    componentDidMount = props => {
        this.setState({
            likesTotal: this.props.likesTotal,
            isItLiked: true
        })
        

    }

//     toggleLike = () => {
//         this.setState(prevState => {
//             return (
//                 isItLiked: !prevState.notLiked,

//             )
//         })
//         {this.state.isItLiked ? this.setState(prevState => {
//             return (
//                 likesTotal: prevState.likesTotal +=1,
//             )
//         })
//         :
//         this.setState(prevState => {
//             return (
//                 likesTotal: prevState.likesTotal -=1,
//             )
//         })
//     }
  

// }

    

    render() {
        // console.log(this.props.likesTotal);
        return (
            

            <>
           
                
                    <LikeLogos className="like-logos">
                        <i class="far fa-heart"></i>
                        <i class="far fa-comment like-logo-second"></i>
                        <Likes className="likes"><strong>{this.state.likesTotal.likes} likes</strong></Likes>
                    </LikeLogos>
                
            
        </>
            
        )
    }

}

export default LikesButton;