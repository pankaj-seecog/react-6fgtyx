import React from 'react';

const myHOC = (WrappedComponent)=>{

  class HOC extends React.Component{

    constructor(){
      super();
      this.state = {
        count : 0
      }
    }

render(){
  return <WrappedComponent count={this.state.count}/>
}
  }

  return HOC;

}

export default myHOC;







