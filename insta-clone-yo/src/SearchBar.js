import React, { Component } from 'react';
import logo from './logo.svg';
import styled, { css } from "styled-components";
import './App.css';
import PropTypes, { string } from "prop-types";

const SearchBarDiv = styled.div`
    display: flex;
    margin: 0 auto;
    width: 600px;
    height: 25px;
    /* border: 1px solid blue; */
    justify-content: space-between;
    vertical-align: center;
    flex-direction: row;
`
const LogoSection = styled.div`
    display: flex;
    flex-direction: row;
`

const InstaLogoSectionText = styled.p`
    margin-top: 2px;
    margin-left: 5px;
    width: auto;
    height: 100%;
    font-size: 15px;
`

const SearchInput = styled.div`
    display:flex;
`

const RightSideSearchBar = styled.div`
    font-size: 25px;
    padding-right: 20px;
    width: 100px;
    justify-content: flex-end;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
`

class SearchBar extends Component {
    render() {
        return (
            <SearchBarDiv className="search-bar">
                <LogoSection className="instagram-logo-section">
                    
                    <InstaLogoSectionText className="instagram-logo-section-text"><i className="fab fa-instagram"></i>| Instagram</InstaLogoSectionText>
                </LogoSection>
                <SearchInput className="search-input">
                    <input
                        placeholder="Search" />
                </SearchInput>
                <RightSideSearchBar className="right-side-searchbar">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </RightSideSearchBar>
            </SearchBarDiv>
        )
    }
}

export default SearchBar;