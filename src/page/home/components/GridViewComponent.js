import React from 'react'
import PropTypes from 'prop-types';
class GridViewComponent extends React.PureComponent {


    //写在这里或者放置在最下面设置属性 
    // static propTypes = {
    //     homeHotMenu: PropTypes.array.isRequired,
    // }

    render() {
        const {homeHotMenu,colum}=this.props
        const {data}=homeHotMenu
        return (
            <ul style={{display:'flex',
              flexDirection:'row',
              flexWrap:'wrap',
              padding:0,
              margin:0,
              backgroundColor:'#fff'
              }}>
                {
                    !!data&&data.length>0&&data.map((item,index)=>{
                        return (
                            <li 
                                key={'index'+index}
                                style={{listStyle:'none',
                                width:(100/colum)+'%',
                                justifyContent:'center',
                                alignItems:'center',
                                marginTop:'0.2rem',
                                marginBottom:'0.2rem',
                                height:'1.6rem',
                                display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                                }}>
                                    <img style={{
                                        width:'0.84rem',
                                        height:'0.9rem'
                                    }}
                                    src={item.displayIcon}
                                    />
                                 <div style={{
                                     height:'1.2rem',
                                     margin:'0.2rem',
                                     
                                 }}>
                                     <span>{item.displayName}</span>
                                     <span></span>
                                 </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    ulStyle=()=>{
        return {
        
        }
    }
}

GridViewComponent.propTypes = {
    homeHotMenu: PropTypes.object.isRequired,
}
export default GridViewComponent