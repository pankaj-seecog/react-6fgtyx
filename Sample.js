import React from 'react';
import myHOC from './MyHoc'
class Sample extends React.Component{

render(){
  return (
    <div>
The count is {this.props.count}
<hr/>
<button onClick={this.props.inc}>++</button> |
<button onClick={this.props.dec}>--</button>
    </div>
  )
}

}

export default myHOC(Sample);