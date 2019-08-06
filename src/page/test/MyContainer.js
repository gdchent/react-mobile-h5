import React, { Component } from 'react';
class MyContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.state.count++;
        this.setState({
            count: this.state.count++
        })
        console.log(this.state)
    }

    render() {

        return (
            <div style={{ border: "1px solid blue" }}>
                <span>父容器:</span>
                {this.renderChildren()}
            </div>
        )
    }

    renderChildren = () => {
        const childrenWithProps = React.Children.map(this.props.children, (child, index) => {
            console.log("TCL: MyContainer -> renderChildren -> index ", index, child)

            return (
                React.cloneElement(child,
                    {
                        testA:'test',
                        parentState: this.state.count,
                        handleClick: this.handleClick
                    },
                    React.Children.map(child.props.children, (child, index) => {
                        console.log('childxxxxx', child)
                        return React.cloneElement(child, { test: 'test' })
                    })
                ))
    })
        return childrenWithProps
    }
}
export default MyContainer