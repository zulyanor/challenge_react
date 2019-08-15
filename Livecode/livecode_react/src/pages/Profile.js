import React from "react";
import { Redirect } from "react-router-dom";
import Header from "../component/Header";
import { connect } from "unistore/react";
import { actions } from "../store";

const Profile = props => {
    const is_login = props.isLogin;
    const username = props.username;
    const email = props.email;
    const avatar = props.avatar;
    console.log("is_login", is_login);

    if (!is_login) {
        return <Redirect to={{ pathname: "/Signin" }} />;
    } else {
        return (
            <div className="content">
                <Header />
                <div className="row justify-content-center ">
                    <div className="col-md-6 profile_page">
                        <h1 style={{ textAlign: "center" }}>Profile</h1>
                        <img src={'"' + avatar + '"'} />
                        <p>
                            <label>Username:</label> {username}
                        </p>
                        <p>
                            <label>Email:</label> {email}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
};

export default connect(
    "username, password, isLogin, email",
    actions
)(Profile);
