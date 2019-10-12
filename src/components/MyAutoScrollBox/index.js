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
        const DefaultBox=document.getElementsByClassName('defaultBox')[0];
        const ScrollBox=document.getElementsByClassName('scrollBox')[0];
        if (DefaultBox){
            console.log(12222)
            DefaultBox.addEventListener('touchstart',()=>{this.stopScroll()});
            DefaultBox.addEventListener('touchend',()=>{this.beginScroll(DefaultBox,ScrollBox)});

            DefaultBox.addEventListener('mouseenter',()=>{this.stopScroll()});
            DefaultBox.addEventListener('mouseleave',()=>{this.beginScroll(DefaultBox,ScrollBox)});
        }
        this.AutoScroll()
    }

    //开启定时器滚动
    beginScroll=(DefaultBox,ScrollBox)=>{
            this.t=setInterval(()=>{
                if (this.canScroll(DefaultBox,ScrollBox)){
                    ScrollBox.style.top=parseInt( ScrollBox.style.top)-Math.ceil(this.props.speed>0?this.props.speed:this.props.speed*-1)+'px';
                }else {
                    clearInterval(this.t)
                }
            },20)
        }


    //结束滚动
    stopScroll=()=>{
        if (this.t){
            clearInterval(this.t)
        }
    }

    AutoScroll=()=>{
        const ScrollBox=document.getElementsByClassName('scrollBox')[0];
        const DefaultBox=document.getElementsByClassName('defaultBox')[0];
        if (ScrollBox&&DefaultBox) {
            this.stopScroll();
            this.beginScroll(DefaultBox,ScrollBox)
        }
    };


    render() {
        return (
            <div className={'defaultBox'}  style={{height:this.props.height,width:this.props.width}}>
                <div className={'scrollBox'} >
                    {this.props.children}
                </div>
            </div>
        )

    }
}
