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

// variable to state route between pages => link_to in {header component}
const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/Form" component={Form} />
            <Route exact path="/Article" component={Article} />
            <Route path="/Article/:category" component={Article} />
            <Route path="/Categories/:category" component={Categories} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
