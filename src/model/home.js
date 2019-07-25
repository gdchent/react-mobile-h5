/*
 * @Author: chentao 
 * @Date: 2019-07-23 14:41:24 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-07-25 15:44:03
 */
import { delay, loadImg } from '../util'
import request from '../util/request';
import config from '../config/serviceConfig'
export default {
    namespace: 'home',
    state: {
        tabObj: {
            "data": [
                { "title": "热门", "type": "hot", "categoryId": 0 },
                { "title": "彩票", "type": "digital", "categoryId": 0 },
                { "title": "棋牌", "type": "game", "categoryId": 2 },
                { "title": "捕鱼", "type": "game", "categoryId": 1 },
                { "title": "电子", "type": "game", "categoryId": 3 },
                { "title": "体育", "type": "sports", "categoryId": 0 },
                { "title": "视讯", "type": "game", "categoryId": 4 },
                { "title": "体育", "type": "sports", "categoryId": 0 },
                { "title": "视讯", "type": "game", "categoryId": 4 }
            ],
                
            "errorcode": 200, "message": "操作成功"
        }
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

        *getIndexTab(action, effect) {
            const { call, select, put } = effect
            // const res = yield call(request,{
            //         url: '/api_fusion/Lottery/getIndexTab', method: 'POST', data: {
            //             timestamp: '1563867347541',
            //             nonce: "1563867347541-11b65997",
            //         }
            //     })
            // console.log('res', res)
            // yield put({
            //     type: 'updateState',
            //     payload: {
            //         tabObj: res
            //     }
            // })
        }
    }
}