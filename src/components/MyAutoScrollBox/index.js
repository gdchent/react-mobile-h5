import React from 'react';
import './index.css'

export default class MyAutoScrollBox extends React.Component {
    constructor(props){
        super(props)

    }

    // componentDidMount() {
    //     const ScrollBox=document.getElementsByClassName('scrollBox')[0];
    //     const DefaultBox=document.getElementsByClassName('defaultBox')[0];
    //     if (ScrollBox&&DefaultBox){
    //
    //     }
    // }

    canScroll=(fatherBoxDom,childBoxDom)=>{
        if (!childBoxDom.style.top){
            childBoxDom.style.top=0+'px'
        }
        return fatherBoxDom.clientHeight-childBoxDom.clientHeight<parseInt(childBoxDom.style.top)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.AutoScroll()
    }

    componentDidMount() {
        this.AutoScroll()
    }


    AutoScroll=()=>{
        const ScrollBox=document.getElementsByClassName('scrollBox')[0];
        const DefaultBox=document.getElementsByClassName('defaultBox')[0];
        if (ScrollBox&&DefaultBox) {
            if (this.t){
                clearInterval(this.t)
            }
            this.t=setInterval(()=>{
                if (this.canScroll(DefaultBox,ScrollBox)){
                    ScrollBox.style.top=parseInt( ScrollBox.style.top)-this.props.speed+'px';
                }else {
                    clearInterval(this.t)
                }
            },100)
        }
    };


    render() {
        return (
            <div className={'defaultBox'} style={{height:this.props.height}}>
                <div className={'scrollBox'}>
                    {this.props.children}
                </div>
            </div>
        )

    }
}
