import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css/normalize.css";
import AppRouter from "./routers/AppRouter";
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
