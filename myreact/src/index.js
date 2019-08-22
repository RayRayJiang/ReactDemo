import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'

import axios from './assets//js/axios'
// 引入一个全局的上下文对象
import ctx from './assets/js/ctx';
// 引用里面的Provider组件，为整个项目提供全局共享的参数
const GlobelProvider = ctx.Provider;


ReactDOM.render(
    <Provider store={store}>
        <GlobelProvider value={{
            axios,
            commonUrl: (process.env.NODE_ENV == 'development') ? 'http://192.168.50.93:8889' : 'http://47.98.251.7:8889'
        }}>
            <HashRouter>
                <App />
            </HashRouter>
        </GlobelProvider>
    </Provider>,
    document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
