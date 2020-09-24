import React, { Component } from 'react';
import Register from './Components/Register';
import './App.css';
import SignIn from './Components/SignIn';
import ForgetPassword from './Components/ForgetPassword';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <Router>
      <div>
      <Switch> 
        <Route path="/" exact component ={SignIn} ></Route>
        <Route path="/register" exact component={Register} />
        <Route path="/SignIn" exact component={SignIn} /> 
        <Route path="/ForgetPassword" exact component={ForgetPassword} />
      </Switch>
      </div>
      </Router>
    )
  }
}
export default App;
