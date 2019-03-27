import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes, { string } from "prop-types";



class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <div className="instagram-logo-section">
                    
                    <p className="instagram-logo-section-text"><i class="fab fa-instagram"></i>| Instagram</p>
                </div>
                <div className="search-input">
                    <input
                        placeholder="Search" />
                </div>
                <div className="right-side-searchbar">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar;