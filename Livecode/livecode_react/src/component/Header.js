import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import logo from "../logo.svg";

function Header(props) {
    return (
        <div className="Header">
            <header>
                <div className="container-fluid">
                    <div className="row header">
                        <div className="col-md-3 text-center">
                            <div className="header-logo">
                                <img src={logo} height="67px" width="134px" />
                            </div>
                        </div>
                        <div className="col-md-9 header-menu-right">
                            <ul className="topMenu">
                                <li id="home">
                                    <Link to="/">HOME</Link>
                                </li>
                                <li id="profile">
                                    {/* link_to navigate between pages as stated in index.js(main page) */}
                                    <Link to="/profile">PROFILE</Link>
                                </li>
                                <li id="signin">
                                    <Link to="/signin">SIGN IN</Link>
                                </li>
                                <li id="signout">
                                    <Link
                                        to="/signin"
                                        onClick={() => {
                                            props.logOut();
                                        }}
                                    >
                                        SIGN OUT
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default connect(
    "username, password, isLogin",
    actions
)(Header);
