import React from 'react';
import logoAltaDua from './assets/img/logo-ALTA@2x.png';
import fotoCeweDua from './assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import './assets/css/challenge1.css';

function Home() {
    return (
        <div className="Home" id="index">
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="header-logo-alterra">
                                <img src={logoAltaDua} height="67px" width="134px" />
                            </div>
                        </div>
                        <div className="col-md-7 header-menu-right ">
                            <ul className="topMenu">
                                <li id="home">HOME</li>
                                <li id="about">ABOUT</li>
                                <li id="experience">EXPERIENCE</li>
                                <li id="contact">CONTACT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container main-body">
                <div className="row">
                    <div className="col-md-5 text-right">
                        <div className="main-body-photo">
                            <img src={fotoCeweDua} height="355px" width="355px" id="cewe-foto" />
                        </div>
                    </div>
                    <div className="col-md-7 main-body-text">
                        <div className="main-body-text-1">Hi, my name is</div>
                        <div className="main-body-text-2">Anne Sullivan</div>
                        <div className="main-body-text-3">I build things for the web</div>
                        <div className="get-in-touch">
                            <button type="button" className="btn btn-get-in-touch">
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
