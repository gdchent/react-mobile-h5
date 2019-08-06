/*
 * @Author: chentao 
 * @Date: 2019-08-01 14:52:49 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-08-01 15:46:34
 */
import React from 'react'
import { connect } from 'dva'
import './index.less'
class Register extends React.PureComponent {

    render() {
        const { title } = this.props
        return (
            <div className={'container'}>
                <div>{title}</div>
            </div>
        )
    }
}

const connectRes = connect((state) => {
    const { register } = state;
    return {
        title: register.title
    }
})(Register)
export default connectRes