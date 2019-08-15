import React from "react";
import Header from "../component/Header";
import { connect } from "unistore/react";
import { actions } from "../store";

export class Signin extends React.Component {
    doLogin = () => {
        this.props.postLogin().then(() => {
            console.log("this", this);
            this.props.history.replace("/profile");
            console.log("this props history, ", this.props.history);
        });
    };

    render() {
        console.log("state", this.state);
        return (
            <div className="SignIn">
                <Header />
                <div className="row justify-content-center">
                    <div className="col-md-6 sign_in_content text-center">
                        <form onSubmit={e => e.preventDefault()}>
                            <h4>Sign In</h4>
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="username"
                                    // onChange={e => this.changeInput(e)}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    // onChange={e => this.changeInput(e)}
                                />
                            </div>
                            <button onClick={() => this.doLogin()}>
                                Sign In
                            </button>
                            <button type="reset">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    "username, password, isLogin",
    actions
)(Signin);
