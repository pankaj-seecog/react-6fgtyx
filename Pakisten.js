import React from 'react';
import cricketHOC from './Cricket'
class Pakistan extends React.Component{

render(){
  return (
    <div>
Runs : {this.props.runs} | Players : {this.props.players}

<br/>
<button onClick={this.props.four}>4 Runs</button> | 
<button onClick={this.props.six}>6 Runs</button>  | 
<button onClick={this.props.out}>Player Out</button> 
    </div>
  )
}

}

export default cricketHOC(Pakistan);