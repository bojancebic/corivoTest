import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { LogedUserRoute } from './customElements';
import './App.css';

import Login from './views/Login'
import Landing from './views/Landing'
import Settings from './views/Settings'
import Profile from './views/Profile'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <LogedUserRoute exact path="/settings" component={Settings}/>
          <LogedUserRoute path='/profile' component={Profile} />
          <LogedUserRoute exact path="/landing" component={Landing}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
