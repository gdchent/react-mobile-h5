/*
 * @Author: chentao 
 * @Date: 2019-07-23 14:43:50 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-07-25 10:48:25
 */
import React from 'react';
import ReactDOM from 'react-dom';
import dva from 'dva';
import './index.css';
import RouterConfig from '../src/config/routerConfig'
import home from '../src/model/home'
import login from '../src/model/login'
//import {BrowserRouter} from  'react-router'
const createHistory=require("history").createBrowserHistory ;
// ReactDOM.render(<RouterConfig />, document.getElementById('root'));
// 1. Initialize
const app = dva({
    history: createHistory(),
});

// 2. Plugins
//app.use({});

// 3. Model
app.model(home);
app.model(login);
//require('../src/config/routerConfig').default
// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');



