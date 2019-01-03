import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CustomRedux from "./custom-redux/index.js";
import store from "./store/index.js"
import * as serviceWorker from './serviceWorker';

let redux = new CustomRedux(store);
let ReducReturnComponent = redux.mapStateToProps(App);

ReactDOM.render(<ReducReturnComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
