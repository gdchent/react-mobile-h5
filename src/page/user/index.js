/*
 * @Author: chentao 
 * @Date: 2019-07-23 11:07:47 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-07-23 11:08:10
 */
import React from 'react'
import MyAutoScrollBox from '../../components/MyAutoScrollBox'

class User extends React.PureComponent{

    getSameLengthArrayByNum=(num)=>{
        const array=[num];
        if (num>0){
           return array.concat(this.getSameLengthArrayByNum(num-1))
        } else {
            return array
        }
    }

    getBackgroundColor=()=>{
     return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    }

    render(){

        return (
            <div>
                <MyAutoScrollBox
                    height={300}
                    speed={2}
                    children={this.getSameLengthArrayByNum(20).map((v,k)=>{
                        return <div style={{height:40,width:'100%',textAlign:'center',lineHeight:'40px',fontSize:20,background:this.getBackgroundColor()}} key={k}>{v}</div>
                    })}
                />
            </div>
        )
    }
}
export default User 
