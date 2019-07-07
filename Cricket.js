import React from 'react';

const cricketHOC = (WrappedComponent)=>{

class HOC extends React.Component{

constructor(){
  super();
  this.state = {
    runs : 0,
    players : 11
  }
}

fourRuns = ()=>{
  this.setState((pre)=>{
    return {
      ...pre,//spread the older state
      runs : pre.runs+4

    }
  })
}

sixRuns = ()=>{
  this.setState((pre)=>{
    return {
      ...pre,//spread the older state
      runs : pre.runs+6

    }
  })
}

out = ()=>{
  this.setState((pre)=>{
    return {
      ...pre,
      players : pre.players-1
    }
  })
}


render(){
  return <WrappedComponent runs={this.state.runs} players={this.state.players} four={this.fourRuns} six={this.sixRuns} out={this.out}/>
}

}

return HOC;
}

export default cricketHOC;

//spread operator
// var ob = {
//   name : "Mohan",
//   age : 21,
//   sal : 450
// }

// var ob1 = {
//   ...ob
// }

// var ob1 = {
//   name : "Mohan",
//   age : 21,
//   sal : 450
// }