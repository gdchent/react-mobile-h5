/*
 * @Author: chentao 
 * @Date: 2019-07-23 11:19:42 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-08-06 16:31:00
 */
import React from 'react'
import './index.less'
import { connect } from 'dva'
class Lottery extends React.PureComponent {

    render() {
        const { selectIndex } = this.props
        return (
            <div className={'container'}>
                <div className={'header'}>
                    <div>搜索</div>
                    <div className={selectIndex ? 'lotteryActive' : 'lotteryDefault'} onClick={this.isSelectLottery}>彩票</div>
                    <div>体育</div>
                    <div>菜单</div>
                </div>
                <div className={'content'}></div>
            </div>
        )
    }
    isSelectLottery = () => {   
        
    }
}
const connectRes = connect(({ lottery }) => {
    return {
        selectIndex: lottery.selectIndex
    }
})(Lottery)
export default connectRes