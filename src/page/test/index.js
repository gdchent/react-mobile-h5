import React from 'react'
import { connect } from 'dva'
import MyContainer from './MyContainer'
import MySub from './MySub'
import Second from './Second'
class Test extends React.PureComponent {
    render() {
        return (
            <div>
                <div>test页面组件</div>
                <MyContainer>
                    <MySub subInfo={"1"} >
                        <Second test={'testbbbb'} />
                    </MySub>
                    <MySub subInfo={"2"} />
                </MyContainer>
            </div>
        )
    }
}
export default Test