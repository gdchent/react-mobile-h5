/*
 * @Author: chentao 
 * @Date: 2019-07-23 10:40:11 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-07-25 11:55:36
 */
import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import Home from '../home'
class TabMainPage extends React.PureComponent {

    render() {
    console.log("TCL: TabMainPage -> render -> render", this.props)
        return (
            <div className={'tabContainer'}>
                {this.props.children||<Home />}
                <div className={'tabBar'}>
                    <Link className={'tabItem'} to={'/home'}>
                        <div>首页</div>
                    </Link>

                    <Link className={'tabItem'} to={'/lottery'}>
                        <div>开奖</div>
                    </Link>

                    <Link className={'tabItem'} to={'/buylottery'}>
                        <div>开奖大厅</div>
                    </Link>
                    <Link className={'tabItem'} to={'/lotterymenu'}>
                        <div>注单</div>
                    </Link>
                    <Link className={'tabItem'} to={'/user'}>
                        <div>我的</div>
                    </Link>

                </div>
            </div>
        )
    }
}
export default TabMainPage