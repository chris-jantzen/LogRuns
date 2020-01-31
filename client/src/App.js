import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
// import CreateUser from './Components/CreateUser';
import Dashboard from './Components/Dashboard/Dashboard';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
          {/* <CreateUser /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
