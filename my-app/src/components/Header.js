import React from 'react';
import logoAlta from '../assets/img/logo-ALTA@2x.png';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function Header(props) {
    return (
        <div className="Header">
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="header-logo-alterra">
                                <img src={logoAlta} height="67px" width="134px" />
                            </div>
                        </div>
                        <div className="col-md-9 header-menu-right">
                            <ul className="topMenu">
                                <li>
                                    <input
                                        className="form-control mr-sm-2"
                                        type="search"
                                        placeholder="search news.."
                                        aria-label="Search"
                                        // props to call the function handleChange in Article.js
                                        onChange={props.handle}
                                    />
                                </li>
                                <li id="home">
                                    {/* link_to navigate between pages as stated in index.js(main page) */}
                                    <Link to="/">PROFILE</Link>
                                </li>
                                <li id="about">
                                    <Link to="/AboutMe">SIGN IN</Link>
                                </li>
                                <li id="contact">
                                    <Link to="/Form">SIGN OUT</Link>
                                </li>
                                <li id="article">
                                    <Link to="/Article">ARTICLE</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
