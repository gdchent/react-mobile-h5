/*
 * @Author: chentao 
 * @Date: 2019-07-23 09:57:04 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-08-06 16:11:57
 */
import React from 'react'
import { Carousel } from 'antd-mobile'
import { connect } from 'dva'
import { Router, Route, Switch, Link } from 'react-router-dom';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import TweenOne from 'rc-tween-one';
import './index.less'
import 'antd-mobile/dist/antd-mobile.css';

//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import "react-tabs/style/react-tabs.css";

class Home extends React.PureComponent {


    constructor(props) {
        super(props)
        this.speed = 200
        this.animation = { left: '70%', duration: 2000 }
    }
    componentDidMount() {
        this.checkScrollLeft()  //开启水平方向跑马灯
        this.marquee()   //开启垂直方向跑马灯
        this.props.dispatch({
            type: 'home/getIndexTab',
            payload: {}
        })
    }

    //https://www.php.cn/js-tutorial-412818.html
    //js水平滚动实现轮播效果
    checkScrollLeft = () => {
        // 判断文字长度是否大于盒子长度  开始滚动
        //拿到水平包裹的元素  跟文本元素  
        const wrap = this.refs.wrap
        const cont = this.refs.cont
        const text = this.refs.text
        //获取offsetWidth
        let wrapWidth = wrap.offsetWidth
        let textWidth = text.offsetWidth
        //判断 如果文本的宽度比容器要宽就滚动
        if (textWidth > wrapWidth) {
            //设置
            //var str = this.refs.style.height + ""
            text.style.paddingRight = '380px'
            cont.style.left = '-870px'
            //var res = str.substring(0, str.length - 2)
        }
    }

    marquee = () => {
        let scrollTop = 0
        //拿到container容器
        const container = this.refs.container
        const contentUl = this.refs.contentUl
        //如果外面容器的滚动距离大于等于里面容器的高度+border
        if (container.scrollTop >= contentUl.offsetHeight) {
            //this.refs.scrollTop = 0;
            container.scrollTop = 0
        }
        else {
            //this.refs.scrollTop = this.refs.scrollTop + 1
            container.scrollTop = container.scrollTop + 1
        }

    }
    render() {
        const { tabObj } = this.props
        return (
            <div className={'container'}>
                <div className={'header'}>
                    <Link className={'headerNoLoginText'} to={'/login'}>登录</Link>
                    <div className={'headerNoLoginText'}>久久彩票</div>
                    <Link className={'headerNoLoginText'} to='/register'>注册</Link>
                </div>
                <div className={'content'}>
                    <Carousel
                        afterChange={this.onChange}
                        autoplay={true}
                        dots={true} //是否显示面板指示点
                        mode={'banner'}
                        infinite={true} //是否循环播放
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={1.0}
                    >
                        <img src={'https://cpweb-new.dgstaticresources.net/cp99/uploads/20190604/4928bd629e73d06941b5c963b23c82fc.png'} className={'bannerItem'} />
                        <img src={'https://cpweb-new.dgstaticresources.net/uploads/20180823/3e8920c0ad5b7a13f3f88c8adbfdb16f.jpg'} className={'bannerItem'} />
                        <img src={'https://cpweb-new.dgstaticresources.net/cp99/uploads/20190605/46cb58f6c4b7039404f3616083714f9f.png'} className={'bannerItem'} />
                        <img src={'http://img1.imgtn.bdimg.com/it/u=2109601015,3618472228&fm=26&gp=0.jpg'} className={'bannerItem'} />
                    </Carousel>
                    {/* 水平滚动 */}
                    <div className={"wrap"} ref={'wrap'}>
                        <div className={"cont"} ref={'cont'}>
                            <p className={"txt"} ref={'text'}>1.文字如果超出了宽度自动向左滚动文字如果超出了宽度自动向左滚动。</p>
                            <p className={"txt"} ref={'text'}>1.文字如果超出了宽度自动向左滚动文字如果超出了宽度自动向左滚动。</p>
                        </div>
                    </div>
                    <Tabs tabs={tabObj.data}
                        initialPage={2}
                        animated={false}
                        useOnPan={false}
                        tabDirection={'horizontal'}
                    >
                        {
                            this.renderContent()
                        }
                    </Tabs>

                    {
                        this.renderVerticalLooper()
                    }
                    <div style={{ flex: 1 }}>
                        <TweenOne
                            animation={this.animation}
                            paused={this.props.paused}
                            reverse={this.props.reverse}
                            moment={this.props.moment}
                            className="code-box-shape"
                            style={{ margin: '40px 20px' }}
                        />

                        <div style={{
                            position: 'absolute',
                            width: 300,
                            left: '50%',
                            marginLeft: -150,
                            bottom: 25
                        }}
                        >
                            <div type="primary" onClick={this.onRestart}>restart</div>
                        </div>
                    </div>

                    {/* <div className="box">
                        <div className="child-1"></div>
                        <div className="scroll">
                            <div className="child-2"></div>
                        </div>

                    </div> */}

                </div>
            </div>
        )
    }


    containerStyle = () => {
        return {
            flex: 1,
            overflow: 'hidden',
            height: 80,
            width: '100%',
            margin: '90 auto',
            position: 'relative',
        }
    }

    renderVerticalLooper = () => {
        const { scrollTop } = this.props
        return (
            <div style={this.containerStyle()} ref={'container'}>
                <ul style={this.contentStyle()} ref={'contentUl'}>
                    <li style={this.contentStyle()}>脚本之家欢迎您的到来</li>
                    <li style={this.contentStyle()}>只有努力才会有美好的明天</li>
                    <li style={this.contentStyle()}>没有人一开始就是高手，都是从菜鸟开始</li>
                    <li style={this.contentStyle()}>每一天都是新的需要好好珍惜</li>
                    <li style={this.contentStyle()}>怨天尤人是没有任何作用的</li>
                    <li style={this.contentStyle()}>今天你写代码了吗</li>
                    <li style={this.contentStyle()}>分享的胸怀和互助的精神最终成就了你</li>
                </ul>
                <div style={this.spaceStyle()}>
                </div>
            </div>
        )
    }

    containerScrollView = (e) => {
        console.log('bbb', e)
    }
    //内容样式
    contentStyle = () => {
        return {
            listStyleType: 'none',
            height: 22,
            textAlign: 'left',
        }
    }

    spaceStyle = () => {
        return {
            listStyleType: 'none',
            height: 22,
            textAlign: 'left',
        }
    }

    handleClick = () => {
        //截取字符串 substring 或者用slice    a.slice(-3) 
        var str = this.refs.style.height + ""
        var res = str.substring(0, str.length - 2)

    }
    renderContent = () => {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '250px',
                backgroundColor: '#fff'
            }}>
                Content of first tab
            </div>
        )
    }
    
    //轮播图改变事件
    onChange = (e) => {
      
    }
}
const connectRes = connect(({ login, home }) => {
    console.log('homeState', home)
    return {
        tabObj: home.tabObj,
        moment: home.moment,
        paused: home.paused,
        reverse: home.reverse,
    }
})(Home)
export default connectRes