import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";
import App from "./App";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Categories from "./component/Categories";
import Movies from "./pages/Movies";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider, connect } from "unistore/react";
import { store } from "./store";
import * as serviceWorker from "./serviceWorker";

const routing = (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signin" component={Signin} />
                <Route path="/profile" component={Profile} />
                {/* <Route exact path="/movies" component={Movies} /> */}
                <Route path="/movies/:genre" component={Categories} />
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
