/*
 * @Author: chentao 
 * @Date: 2019-08-01 14:56:32 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-08-01 14:57:58
 */
import { delay, loadImg } from '../util'
import request from '../util/request';
import config from '../config/serviceConfig'
export default {
    namespace: 'register',
    state: {
        title: '注册'
    },
    reducers: {
        updateState(state, result) {
            const { payload } = result
            const obj = { ...state, ...payload }
            return obj
        },
    },
    effects: {

    }
}