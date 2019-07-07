import React from 'react';

const myHOC = (WrappedComponent)=>{

  class HOC extends React.Component{

    constructor(){
      super();
      this.state = {
        count : 0
      }
    }

    incCount = ()=>{
this.setState((pre)=>{
  return {
    count : pre.count+1
  }
})

// this.setState({
//   count : 1
// })
    }

    decCount = ()=>{
this.setState((pre)=>{
  return {
    count : pre.count-1
  }
})
    }

render(){
  return <WrappedComponent count={this.state.count} inc={this.incCount} dec={this.decCount}/>
}
  }

  return HOC;

}

export default myHOC;







