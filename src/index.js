import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import ShoppingSite from './containers/ShoppingSite';
import { Provider } from 'react-redux';
import store from './store';



ReactDOM.render(
    <Provider store={store}>
        <ShoppingSite/>
    </Provider>,
    document.querySelector('#root')
);