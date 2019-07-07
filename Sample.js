import React from 'react';
import myHOC from './MyHoc'
class Sample extends React.Component{

render(){
  return (
    <div>
The count is {this.props.count}
    </div>
  )
}

}

export default myHOC(Sample);