/*
 * @Author: chentao 
 * @Date: 2019-07-23 10:07:10 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-07-25 16:05:00
 */
import React from 'react'
import './index.css'
import { connect } from 'dva'
class Login extends React.PureComponent {

    componentDidMount() {
        //获取当前时间戳
        this.props.dispatch({
            type: 'login/getTimestamp',
            payload: {}
        })
        this.props.dispatch({
            type:'login/captcha',
            payload:{
                // timestamp:'1564025732382',
                // nonce:'1564025732382-04bffad0'
            }
        })
    }
    render() {
        const { captchaIconPath } = this.props
        return (
            <div className={'container'}>
                <div className={'header'}>
                    <span onClick={this.close}>关闭</span>
                    <span>免费试玩</span>
                </div>
                <div className={'content'}>
                    <div className={'title'}>欢迎来到久久彩票</div>
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
    refreshIconCaptcha = () => {

    }
    onChangeName = (e) => {
        console.log(e.target.value)
    }
    onChangePwd = (e) => {
        console.log(e.target.value)
    }
    close = () => {
        this.props.history.push({ pathname: '/home' })
    }
    login = () => {
        this.props.history.push({ pathname: '/home' })
    }
}
const connectRes = connect(({ login }) => {
    return {
        captchaIconPath: login.captchaIconPath,
    }
})(Login)
export default connectRes