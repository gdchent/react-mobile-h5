import React, { Component } from 'react';
class MySub extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false
        }
    }

    render() {
        return (
            <div style={{ margin: "15px", border: "1px solid red" }}>
                子元素:{this.props.subInfo}+{this.props.testA}
                <br />
                父组件属性count值: {this.props.parentState}
                <br />
                <span onClick={() => this.props.handleClick()}
                    style={{ display: "inline-block", padding: "3px 5px", color: "#ffffff", background: "green", borderRadius: "3px", cursor: "pointer" }}
                >click me</span>
            </div>
        )
    }
}
export default MySub