/*
 * @Author: chentao 
 * @Date: 2019-07-23 11:07:47 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-07-23 11:08:10
 */
import React from 'react'
import MyAutoScrollBox from '../../components/MyAutoScrollBox'
import './index.css'

class User extends React.PureComponent{

    constructor(props){
        super(props);
        this.state={
            num:20
        }
    }
    //获取一个 长度为num 值为 1，2，3...num 的数组
    getSameLengthArrayByNum=(num)=>{
        const array=[num];
       return num>0?array.concat(this.getSameLengthArrayByNum(num-1)):array
    };

    //获取随机rgb
    getBackgroundColor=()=>{
     return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    };

    //增加数组长度10
    addDivNum=()=>{
        this.setState(state=>{
            return {...state,num:state.num+10}
        })
    };

    render(){
        //speed 只能为正整数  不满1 当作1
        //height 为展示框的高度  默认为200px
        //width 为展示框的框度  默认与父级同宽 100%
        return (
            <div>
                <MyAutoScrollBox
                    width={'100%'}
                    height={300}
                    speed={1}
                    children={this.getSameLengthArrayByNum(this.state.num).reverse().map((v,k)=>{
                        return <div style={{height:40,width:'100%',textAlign:'center',lineHeight:'40px',fontSize:20,background:this.getBackgroundColor()}} key={k}>{v}</div>
                    })}
                />
                <div onClick={this.addDivNum} className={'addButton'}>增加10个,当前总数{this.state.num}个</div>
            </div>
        )
    }
}
export default User 
