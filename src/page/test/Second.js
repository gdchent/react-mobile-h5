import React from 'react'

class Second extends React.PureComponent{

    render(){
        const {test}=this.props
        console.log("TCL: Second -> render -> test", test)
        
        return (
            <div>
                <div>second</div>
                <div>{test}</div>
            </div>
        )
    }
}
export default Second