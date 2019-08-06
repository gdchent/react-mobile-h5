/*
 * @Author: chentao 
 * @Date: 2019-07-23 11:21:24 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-08-06 15:46:34
 */
import React from 'react'
import { connect } from 'dva'
import './index.less'
class BuyLottery extends React.PureComponent {

    render() {
        return (
            <div className={'container'}>
                <div className={'header'}>
                    <div>
                        彩票
                       </div>
                    <div>
                        体育
                       </div>
                    <div>
                        电子
                       </div>
                </div>
                <div className={'content'}>

                </div>
            </div>
        )
    }
}
const connectRes = connect(({ buylottery }) => {
    return {

    }
})(BuyLottery)
export default connectRes