/*
 * @Author: chentao 
 * @Date: 2019-07-23 14:43:05 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-08-06 16:00:38
 */
import request from "../util/request";
import { deepCopy } from '../util/index'
export default {
    namespace: 'login',
    state: {
        captchaIconPath: '', //验证码图片路径
        qqNumber: '',//qq号
        appName: '',//app的名称
        userName: '',
        password: '',
    },
    //同步更新
    reducers: {
        updateState(state, result) {
            const { payload } = result
            const obj = { ...state, ...payload }
            return obj
        },
    },
    effects: {

        //获取时间戳
        *getTimestamp({ payload }, action) {
            console.log("TCL: *getTimestamp -> action", action)
            const { call, put, select } = action
            const res = yield call(request, { url: '/api/General/getTimestamp', method: 'POST', data: {} })
            //console.log("TCL: *getTimestamp -> res ", res )

        },
        //获取验证码
        *captcha({ payload }, { call, put, select }) {
            const res = yield call(request, { url: '/api/v2/General/captcha', method: 'POST', data: {} })
            const { data } = res
            yield put({
                type: 'updateState',
                payload: {
                    captchaIconPath: data
                }
            })
        },
        //获取配置
        *getHotConfig({ payload }, { call, put, select }) {
            const res = yield call(request, { url: '/api/General/getHotConfig', method: 'POST', data: {} })
            console.log("TCL: *getHotConfig -> res ", res)
            const { data } = res
            const { qqNumber, appName } = data
            const stateN = yield select((state) => state.login)
            // console.log('stateN', stateN)
            yield put({
                type: 'updateState',
                payload: {
                    qqNumber: qqNumber,
                    appName: appName
                }
            })
            const state = yield select((state) => state.login)
            console.log('state', state)
        },
        //
        *getLotteryList({ payload }, { call, put, select }) {

        },
        //登录
        *signIn({ payload }, { call, put, select }) {
            const res = yield call(request, { url: '/api/v2/User/signIn', method: 'POST', data: payload })
            return res
        }
    },
    //订阅 监听路由变化/
    subscriptions: {
        setup(payload) {
            // console.log('dingyue',payload)
            const { dispatch, history } = payload
            
        }
    }
}