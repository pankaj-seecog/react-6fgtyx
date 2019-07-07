import React, { Component } from 'react';
import { render } from 'react-dom';
import India from './India';
import Pakistan from './Pakisten';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<div><India /><hr/><Pakistan/></div>, document.getElementById('root'));
