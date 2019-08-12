import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/challenge1.css';
// import App from './App';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Form from './pages/Form';
import Article from './pages/Article';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Article />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
