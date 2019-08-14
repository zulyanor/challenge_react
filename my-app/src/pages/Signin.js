import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Provider, connect } from 'unistore/react';
import { actions } from '../components/Initial';

class Signin extends React.Component {
    state = { username: '', password: '' };
    changeInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    postLogin = () => {
        const { username, password } = this.state;
        const data = {
            username: username,
            password: password
        };
        const self = this;
        axios
            .post('https://zulyano.free.beeceptor.com/auth', data)
            .then(function(response) {
                console.log(response.data);
                // if (response.data.hasOwnProperty('api_key')) {
                // localStorage.setItem('api_key', response.data.api_key);
                // localStorage.setItem('is_login', true);
                // localStorage.setItem('full_name', response.data.full_name);
                // localStorage.setItem('email', response.data.email);
                self.props.changeUsername(response.data.username);
                // self.props.changePassword(response.data.password);
                self.props.changeEmail(response.data.email);
                self.props.changeLogin();
                console.log(self.props);
                self.props.history.push('/Profile');
                // }
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        console.log('state', this.state);
        return (
            <div className="SignIn">
                <Header />
                <section className="content signin">
                    <form onSubmit={e => e.preventDefault()}>
                        <h4>Sign In</h4>
                        <div>
                            <input
                                type="text"
                                name="username"
                                placeholder="username"
                                onChange={e => this.changeInput(e)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={e => this.changeInput(e)}
                            />
                        </div>
                        <button onClick={() => this.postLogin()}>Sign In</button>
                        <button type="reset">Reset</button>
                    </form>
                </section>
            </div>
        );
    }
}

export default connect(
    'username, password, isLogin',
    actions
)(Signin);
