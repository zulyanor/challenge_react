import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { connect } from 'unistore/react';
import { actions } from '../components/Initial';

const Profile = props => {
    const is_login = props.isLogin;
    // const email = localStorage.getItem('email');
    const username = props.username;
    const email = props.email;
    // const api_key = localStorage.getItem('api_key');
    console.log('is_login', is_login);

    if (!is_login) {
        return <Redirect to={{ pathname: '/Signin' }} />;
    } else {
        return (
            <section className="content">
                <Header />
                <h1 style={{ textAlign: 'center' }}>Profile</h1>
                <p>
                    <label>Username:</label> {username}
                </p>
                <p>
                    <label>Email:</label> {email}
                </p>
            </section>
        );
    }
};

export default connect(
    'username, password, isLogin',
    actions
)(Profile);
