import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes, { string } from "prop-types";



class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <div className="instagram-logo-section">
                    <i class="fab fa-instagram"></i>
                    <p className="instagram-logo-section-text">Instagram</p>
                </div>
                <div className="search-input">
                    <input
                        placeholder="Search" />
                </div>
                <div className="right-side-searchbar">
                    <i class="far fa-compass"></i>
                    <i class="far fa-heart"></i>
                    <i class="far fa-user"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar;