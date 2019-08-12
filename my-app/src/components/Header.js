import React from 'react';
import logoAlta from '../assets/img/logo-ALTA@2x.png';

function Header() {
    return (
        <div className="Header">
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="header-logo-alterra">
                                <img src={logoAlta} height="67px" width="134px" />
                            </div>
                        </div>
                        <div className="col-md-7 header-menu-right">
                            <ul className="topMenu">
                                <li>
                                    <input
                                        class="form-control mr-sm-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                </li>
                                <li id="home">HOME</li>
                                <li id="about">ABOUT</li>
                                <li id="contact">CONTACT</li>
                                <li id="article">ARTICLE</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
