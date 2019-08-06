/*
 * @Author: chentao 
 * @Date: 2019-07-23 10:07:10 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-08-01 09:45:51
 */
import React from 'react'
import './index.css'
import { connect } from 'dva'
import { Toast } from 'antd-mobile';
class Login extends React.Component {

    componentDidMount() {
        //获取当前时间戳
        this.props.dispatch({
            type: 'login/getTimestamp',
            payload: {}
        })
        this.props.dispatch({
            type: 'login/captcha',
            payload: {
                // timestamp:'1564025732382',
                // nonce:'1564025732382-04bffad0'
            }
        })
        this.props.dispatch({
            type: 'login/getHotConfig',
            payload: {
                // timestamp:'1564025732382',
                // nonce:'1564025732382-04bffad0'
            }
        })
    }
    render() {
        const { captchaIconPath, appName } = this.props
        console.log("TCL: Login -> render -> this.props", JSON.stringify(this.props))
        return (
            <div className={'container'}>
                <div className={'header'}>
                    <span onClick={this.close}>关闭</span>
                    <span>免费试玩</span>
                </div>
                <div className={'content'}>
                    <div className={'title'}>欢迎来到{appName}</div>
                    <div className={'emptyView'}></div>
                    <div className={'inputItem'}>
                        <input className={'input'} onChange={this.onChangeName} placeholder={'请输入用户名'} />
                    </div>
                    <div className={'inputItem'}>
                        <input className={'input'} onChange={this.onChangePwd} placeholder={'请输入密码'} />
                    </div>
                    <div className={'inputItem'}>
                        <input className={'inputCapatcha'} placeholder={'请输入验证码'} />
                        <img src={captchaIconPath} alt={'验证码'} onClick={this.refreshIconCaptcha} />
                    </div>
                    <div className={'emptyView'}></div>
                    <div className={'loginButton'} onClick={this.login}>登录</div>
                </div>
            </div>
        )
    }
    //刷新验证码
    refreshIconCaptcha = () => {
        this.props.dispatch({ type: 'login/captcha', payload: {} })
    }
    //输入用户名
    onChangeName = (e) => {
        this.props.dispatch({
            type: 'login/updateState', payload: {
                userName: e.target.value
            }
        })
    }
    //输入密码
    onChangePwd = (e) => {
        this.props.dispatch({
            type: 'login/updateState', payload: {
                password: e.target.value
            }
        })
    }
    close = () => {
        this.props.history.go(-1)
    }
    //登录操作
    login = () => {
        const { captchaIconPath, appName, userName, password } = this.props
        if (!userName) {
            Toast.show('用户名不能为空')
            return
        }
        if (!password) {
            Toast.show('密码不能为空')
            return
        }
        const params = {
            captcha: captchaIconPath,
            channel: 'wap-99ttt.cc',
            nonce: '',
            password: password,
            terminal: 'h5',
            timestamp: '',
            userName: userName
        }
        this.props.dispatch({ type: 'login/signIn', payload: params })
            .then((res) => {
                console.log("TCL: Login -> login -> res", res)
                //登录成功跳转到首页
                this.props.history.push({ pathname: '/home' })
            })

    }

    componentWillUpdate(props, state) {
        console.log("TCL: Login -> componentWillUpdate -> props,state", props, state)
    }
}
const connectRes = connect((state) => {
    const { login } = state
    return {
        captchaIconPath: login.captchaIconPath,
        appName: login.appName,  //接收model触发的值
        appNumber: login.appNumber,
        userName: login.userName,
        password: login.password
    }
})(Login)
export default connectRes