import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Home from './Home'
import AboutMe from './AboutMe'
import Form from './Form'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Form />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
