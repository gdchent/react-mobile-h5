/*
 * @Author: chentao 
 * @Date: 2019-07-23 14:41:24 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-08-18 18:18:52
 */
import { delay, loadImg } from '../util'
import request from '../util/request';
import config from '../config/serviceConfig'
import banner from '../data/banner'
import homeHotMenu from '../data/homeHotMenu' //获取tab对应的一个tab菜单的数据
import getIndexTab from '../data/getIndexTab'  //获取首页中间区域选项卡的数据
export default {
    namespace: 'home',
    state: {
        tabObj: {}, //tab选项卡的数据
        homeHotMenu:{}, //热门彩种信息
        banner:{},//彩种信息
        selectIndex:0, //默认选中的中间区域的tab为0
        
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
    
        //获取素有的tab的数据
        *getIndexTab(action, effect) {
            const { call, select, put } = effect
            //同步更新state的数据
            yield put({
                type:'updateState',
                payload:{
                    tabObj:getIndexTab
                }
            })
        },
         //获取热门菜单数据
        *getHomeHotMenu(action,effect){
            const {put }=effect
            yield put({
                type:'updateState',
                payload:{
                    homeHotMenu:homeHotMenu,
                }
            })
        },
        //获取轮播图
        *getBanner(action,effect){
            const {put }=effect
            yield put({
                 type:'updateState',
                 payload:{
                     banner:banner
                 }
            })
        }

    }
}