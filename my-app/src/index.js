import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import './assets/css/challenge1.css';
import App from './App';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Form from './pages/Form';
import Article from './pages/Article';
import Categories from './components/Categories';
import * as serviceWorker from './serviceWorker';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Notfound from './pages/Notfound';

// variable to state route between pages => link_to in {header component}
const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/AboutMe" component={AboutMe} />
                <Route path="/Form" component={Form} />
                <Route exact path="/Article" component={Article} />
                <Route path="/Article/:category" component={Article} />
                <Route exact path="/Signin" component={Signin} />
                <Route exact path="/Profile" component={Profile} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
