/*
 * @Author: chentao 
 * @Date: 2019-07-23 09:57:04 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-07-25 15:47:54
 */
import React from 'react'
import { Carousel } from 'antd-mobile'
import { connect } from 'dva'
import { Router, Route, Switch, Link } from 'react-router-dom';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import "react-tabs/style/react-tabs.css";

class Home extends React.PureComponent {


    componentDidMount() {
        this.props.dispatch({
            type: 'home/getIndexTab',
            payload: {}
        })
    }
    render() {
        const { tabObj } = this.props
        console.log("TCL: Home -> render -> tabObj", tabObj)
        return (
            <div className={'container'}>
                <div className={'header'}>
                    <div>aaa</div>
                    <div>bbb</div>
                    <div>ccc</div>
                </div>
                <Carousel
                    afterChange={this.onChange}
                    autoplay={true}
                    dots={false}
                    mode={'banner'}
                >
                    <img src={'https://cpweb-new.dgstaticresources.net/cp99/uploads/20190604/4928bd629e73d06941b5c963b23c82fc.png'} style={{ width: '100vw', height: 80 }} />
                    <img src={'https://cpweb-new.dgstaticresources.net/uploads/20180823/3e8920c0ad5b7a13f3f88c8adbfdb16f.jpg'} style={{ width: '100vw', height: 80 }} />
                    <img src={'https://cpweb-new.dgstaticresources.net/cp99/uploads/20190605/46cb58f6c4b7039404f3616083714f9f.png'} style={{ width: '100vw', height: 80 }} />
                    <img src={'http://img1.imgtn.bdimg.com/it/u=2109601015,3618472228&fm=26&gp=0.jpg'} style={{ width: '100vw', height: 80 }} />
                </Carousel>
                <Tabs tabs={tabObj.data} initialPage={2} animated={false} useOnPan={false}
                    tabDirection={'horizontal'}
                >
                    {
                            this.renderContent()
                    }

                </Tabs>
            </div>
        )
    }

    renderContent = () => {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                Content of first tab
            </div>
        )
    }

    onChange = (a) => {
        console.log(a)
    }
}
const connectRes = connect(({ login, home }) => {
    return {
        tabObj: home.tabObj
    }
})(Home)
export default connectRes