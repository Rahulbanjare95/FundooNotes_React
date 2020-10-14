import React, { Component } from 'react';
import Register from './Components/Register';
import './App.css';
import SignIn from './Components/SignIn';
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Archive from './Components/Archive';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          
          <Route path="/" exact component={SignIn} ></Route>
          <Route path="/register" component={Register} />
          <Route path="/SignIn"  component={SignIn} />
          <Route path="/ForgetPassword"  component={ForgetPassword} />
          <Route path="/resetpassword/:token"  component={ResetPassword} />
          <Route path="/Dashboard" component={Dashboard} />
      
          <Route path={'/archive'} component={Archive}>

          </Route>

        </Switch>

      </Router>
    )
  }
}
export default App;
