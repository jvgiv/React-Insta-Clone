import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes, { string } from "prop-types";



class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <div className="instagram-logo-section">
                    <img src="" alt="Instagram Logo"/>
                </div>
                <div className="search-input">
                    <input
                        placeholder="Search" />
                </div>
                <div className="right-side-searchbar">
                    <img src="" alt="Explore"/>
                    <img src="" alt="Activity"/>
                    <img src="" alt="Profile"/>
                </div>
            </div>
        )
    }
}

export default SearchBar;