import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import SignUp from './components/SignUp';
import SignUp_2 from './components/SignUp_2';
import View from './components/View';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';
import Create from './components/Create';
import Evaluation from './components/Evaluation';
import mail from './components/mail';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
