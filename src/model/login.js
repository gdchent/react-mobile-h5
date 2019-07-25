import request from "../util/request";


/*
 * @Author: chentao 
 * @Date: 2019-07-23 14:43:05 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-07-25 16:14:23
 */
export default {
    namespace: 'login',
    state: {
        captchaIconPath: '',
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
        *getTimestamp({ payload }, { call, put, select }) {
            const res = yield call(request, { url: '/api/General/getTimestamp', method: 'POST', data: {} })
            //console.log("TCL: *getTimestamp -> res ", res )
        },
        //获取验证码
        *captcha({ payload }, { call, put, select }) {
            const res = yield call(request, { url: '/api/v2/General/captcha', method: 'POST', data: {} })
            //console.log("TCL: *captcha -> res", res)
            const {data}=res
            yield put({
                type:'login/updateState',
                payload:{
                    captchaIconPath:data
                }
            })
        }
    }
}