import React, { Component } from 'react';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {

  state = 
  {
    name : "rohit"
  }

  stateManipulator = (event) =>
  {
    this.setState(
      {
        name : event.target.value
      }
    );
  }


  render() {
    return (
      <div className="App">
      Hi
      <UserOutput name="amit" />
      <UserOutput name={this.state.name} />
      <UserInput uch={this.stateManipulator} name ={this.state.name}/>
      </div>
    );
  }
}

export default App;
