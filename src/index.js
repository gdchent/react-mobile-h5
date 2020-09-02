/*
 * @Author: chentao 
 * @Date: 2019-07-23 14:43:50 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-08-24 14:04:16
 */
import React from 'react';
import ReactDOM from 'react-dom';
import dva from 'dva';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';
import RouterConfig from '../src/config/routerConfig'
import home from '../src/model/home'
import login from '../src/model/login'
import register from './model/register' 
import lottery from './model/lottery'
import buylottery from './model/buylottery'

const createHistory=require("history").createBrowserHistory ;
// ReactDOM.render(<RouterConfig />, document.getElementById('root'));
// 1. Initialize
const app = dva({
    history: createHistory(),//https://dvajs.com/knowledgemap/#%E5%88%87%E6%8D%A2-history-%E4%B8%BA-browserhistory
});

// 2. Plugins
//app.use({});
// 3. Model
app.model(home)
app.model(login)
app.model(register)
app.model(lottery)
app.model(buylottery)
//require('../src/config/routerConfig').default
// 4. Router
app.router((router)=> {
    const {app,history}=router
    return (
        <RouterConfig app={app} history={history}/>
    )
});

// 5. Start
app.start('#root');



