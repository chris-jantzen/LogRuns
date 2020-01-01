import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import CreateUser from './Components/CreateUser';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <CreateUser />
      </div>
    );
  }
}

export default App;
